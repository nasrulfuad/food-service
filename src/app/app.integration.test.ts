import { app } from "./app";
import request from "supertest";

describe("App", () => {
  describe("/toppings", () => {
    it.todo("should create a new topping");
    it.todo("should get a topping");
    it.todo("should update an existing topping");
    it.todo("should delete an existing topping");
    it("should get all toppings", async () => {
      const response = await request(app).get("/toppings");
      expect(response.status).toBe(200);
    });
  });

  describe("/fillings", () => {
    it.todo("should create a new filling");
    it.todo("should get a filling");
    it.todo("should update an existing filling");
    it.todo("should delete an existing filling");
    it("should get all fillings", async () => {
      const response = await request(app).get("/fillings");
      expect(response.status).toBe(200);
    });
  });

  describe("/foods", () => {
    it.todo("should create a new food");
    it.todo("should get a food");
    it.todo("should update an existing food");
    it.todo("should delete an existing food");
    it("should get all foods", async () => {
      const response = await request(app).get("/foods");
      expect(response.status).toBe(200);
    });
  });

  describe("/orders", () => {
    it("should create a new order", async () => {
      const response = await request(app)
        .post("/orders")
        .set("Accept", "application/json")
        .send({
          userName: "John Doe",
          description: "John doe bought some foods",
          foodIds: [
            "96fdf3f8-ca84-4088-bbbb-997f0cb1d8e4",
            "1b5eeb5d-5a4d-4a4b-a09c-005764b4baf5",
          ],
          toppingIds: ["4d08c06d-e83d-4185-baf3-1c854329cbe3"],
          fillingIds: ["460d3f95-8bc7-44ef-ac5d-e053dfeffa8a"],
        })
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it.todo("should get an order");

    it("should get all orders", async () => {
      const response = await request(app).get("/orders");
      expect(response.status).toBe(200);
    });
  });
});
