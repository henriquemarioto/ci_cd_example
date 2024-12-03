import request from "supertest"
import App from "../app"

const server = App.getServer()

describe("GET initial", () => {
  it("should return 'Working'", async () => {
    const res = await request(server).get("");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Working");
  });
});