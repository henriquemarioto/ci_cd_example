import request from "supertest"
import App from "../../app"

const server = App.getServer()

describe("POST /math/sum", () => {
  it("sending only 0 numbers should return 0", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [0, 0, 0, 0] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 0 })
  })

  it("sending only a number shold return this number", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [8] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 8 })
  })

  it("1 + 2 + 3 + 4 should return 10", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [1, 2, 3, 4] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 10 })
  })

  it("100 + 5 + 300 should return 405", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [100, 5, 300] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 405 })
  })

  it("10 + 20 + -5 should return 25", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [10, 20, -5] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 25 })
  })

  it("0.1 + 7 + 0.5 should return 7.6", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [0.1, 7, 0.5] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 7.6 })
  })

  it("0.5 + 0.7 + -0.3 should return 0.9", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: [0.5, 0.7, -0.3] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ result: 0.9 })
  })

  it("sending nothing should return status 400", async () => {
    const response = await request(server).post("/math/sum").send()
    expect(response.status).toBe(400)
  })

  it("sending a value that is not an array should return status 400", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: 20 })
    expect(response.status).toBe(400)
  })

  it("sending an array without numbers should return status 400", async () => {
    const response = await request(server).post("/math/sum").send({ numbers: ["2", "7", "8"] })
    expect(response.status).toBe(400)
  })
})