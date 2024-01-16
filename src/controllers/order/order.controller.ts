import type { NextFunction, Request, Response } from "express";

export interface IOrderController {
  findAll(req: Request, res: Response, next: NextFunction): Promise<any>;
  findById(req: Request, res: Response, next: NextFunction): Promise<any>;
  create(req: Request, res: Response, next: NextFunction): Promise<any>;
}
