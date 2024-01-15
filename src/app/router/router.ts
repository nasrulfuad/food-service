import { PrismaClient } from "@prisma/client";
import type { Express } from "express";
import { di } from "../di";

export function router(app: Express, prisma: PrismaClient): Express {
  const injections = di({ prisma });

  app.get("/", (req, res) => {
    return res.end("Hello");
  });

  /** TOPPING ROUTES */
  app.use(
    "/toppings",
    injections.topping.controller.findAll.bind(injections.topping.controller) // Bind controller to use `this` instance from DI
  );

  return app;
}
