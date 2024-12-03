import express, { Express, Router } from "express";
import Controller from "./shared/interfaces/Controller.interface";
import MathController from "./math/math.controller";

class App {
  public app: Express;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeControllers(controllers: Controller[]) {
    this.app.use(
      Router().get("", (req, res) => {
        res.status(200).json({ message: "Working" });
      })
    );
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default new App([new MathController()], 3333);
