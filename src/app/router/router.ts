import { PrismaClient } from "@prisma/client";
import type { Express, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { bodyValidatorMiddleware } from "../../middlewares/validator.middleware";
import { createFillingRequest } from "../../web/filling/create-filling.request";
import { updateFillingRequest } from "../../web/filling/update-filling.request";
import { createFoodRequest } from "../../web/food/create-food.request";
import { updateFoodRequest } from "../../web/food/update-food.request";
import { createOrderRequest } from "../../web/order/create-order.request";
import { createToppingRequest } from "../../web/topping/create-topping.request";
import { updateToppingRequest } from "../../web/topping/update-topping.request";
import { di } from "../di";

export function router(app: Express, prisma: PrismaClient): Express {
  const injections = di({ prisma });

  app.get("/", (req, res) => {
    return res.end("Hello");
  });

  /** TOPPING ROUTES */
  {
    app.get(
      "/toppings",
      injections.topping.controller.findAll.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
    app.post(
      "/toppings",
      bodyValidatorMiddleware(createToppingRequest),
      injections.topping.controller.create.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
    app.get(
      "/toppings/:id",
      injections.topping.controller.findById.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
    app.put(
      "/toppings/:id",
      bodyValidatorMiddleware(updateToppingRequest),
      injections.topping.controller.update.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
    app.delete(
      "/toppings/:id",
      injections.topping.controller.delete.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
  }

  /** FILLING ROUTES */
  {
    app.get(
      "/fillings",
      injections.filling.controller.findAll.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.post(
      "/fillings",
      bodyValidatorMiddleware(createFillingRequest),
      injections.filling.controller.create.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.get(
      "/fillings/:id",
      injections.filling.controller.findById.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.put(
      "/fillings/:id",
      bodyValidatorMiddleware(updateFillingRequest),
      injections.filling.controller.update.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.delete(
      "/fillings/:id",
      injections.filling.controller.delete.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
  }

  /** FOOD ROUTES */
  {
    app.get(
      "/foods",
      injections.food.controller.findAll.bind(injections.food.controller) // Bind controller to use `this` instance from DI
    );
    app.post(
      "/foods",
      bodyValidatorMiddleware(createFoodRequest),
      injections.food.controller.create.bind(injections.food.controller) // Bind controller to use `this` instance from DI
    );
    app.get(
      "/foods/:id",
      injections.food.controller.findById.bind(injections.food.controller) // Bind controller to use `this` instance from DI
    );
    app.put(
      "/foods/:id",
      bodyValidatorMiddleware(updateFoodRequest),
      injections.food.controller.update.bind(injections.food.controller) // Bind controller to use `this` instance from DI
    );
    app.delete(
      "/foods/:id",
      injections.food.controller.delete.bind(injections.food.controller) // Bind controller to use `this` instance from DI
    );
  }

  /** ORDER ROUTES */
  {
    app.get(
      "/orders",
      injections.order.controller.findAll.bind(injections.order.controller) // Bind controller to use `this` instance from DI
    );
    app.post(
      "/orders",
      bodyValidatorMiddleware(createOrderRequest),
      injections.order.controller.create.bind(injections.order.controller) // Bind controller to use `this` instance from DI
    );
    app.get(
      "/orders/:id",
      injections.order.controller.findById.bind(injections.order.controller) // Bind controller to use `this` instance from DI
    );
  }

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
      return res.status(400).json(err.issues);
    }

    /** Add logger, custom errors, etc. */
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  });

  return app;
}
