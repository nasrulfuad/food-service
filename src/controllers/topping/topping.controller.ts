import type { NextFunction, Request, Response } from "express";
import { ITopping } from "../../models/topping/topping.model";

export interface IToppingController {
  findAll(req: Request, res: Response, next: NextFunction): Promise<any>;
  findById(id: string): Promise<ITopping>;
  update(t: ITopping, id: string): Promise<ITopping>;
  delete(t: ITopping): Promise<void>;
  create(topping: ITopping): Promise<ITopping>;
}
