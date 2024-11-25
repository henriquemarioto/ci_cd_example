import request from "supertest"
import app from "../app"

describe("GET initial", () => {
  it("should return 'Working'", async () => {
    const res = await request(app).get("");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Working");
  });
});