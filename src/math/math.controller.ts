import { Request, Response, Router } from "express";
import MathService from "./math.service";
import Controller from "../shared/interfaces/Controller.interface";
import { validateRequestMiddleware } from "../shared/middlewares/validate.middleware";
import { SumRequestValidator } from "../shared/validators/SumRequest.validator";

class MathController implements Controller {
  public path = "/math";
  public router = Router();

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes = () => {
    this.router.post(
      `${this.path}/sum`,
      validateRequestMiddleware(SumRequestValidator),
      this.sum
    );
  };

  sum(req: Request, res: Response) {
    const { numbers }: { numbers: number[] } = req.body;

    const sumResult = MathService.sum(numbers);

    res.status(200).json({ result: sumResult });
  }
}

export default MathController;
