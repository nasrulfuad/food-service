import { PrismaClient } from "@prisma/client";
import type { Express, Request, Response, NextFunction } from "express";
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
      injections.topping.controller.create.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
    );
    app.put(
      "/toppings/:id",
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
      injections.filling.controller.create.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.put(
      "/fillings/:id",
      injections.filling.controller.update.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
    app.delete(
      "/fillings/:id",
      injections.filling.controller.delete.bind(injections.filling.controller) // Bind controller to use `this` instance from DI
    );
  }

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    /** Add logger, custom errors, etc. */
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  });

  return app;
}
