import type { Express } from "express";

export function router(app: Express): Express {
  app.get("/", (req, res) => {
    return res.end("Hello");
  });

  app.get("/menu", (req, res) => {
    return res.end("OKE");
  });

  return app;
}
