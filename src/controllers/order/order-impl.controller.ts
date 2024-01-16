import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IFillingService } from "../../services/filling/filling.service";
import { IOrderController } from "./order.controller";
import { IOrderService } from "../../services/order/order.service";

export class OrderImplController implements IOrderController {
  constructor(private orderService: IOrderService) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const r = await this.orderService.findAll();
      return res.json(r);
    } catch (e) {
      next(e);
    }
  }

  findById(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async create(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    try {
      const r = await this.orderService.create(req.body);
      return res.json(r);
    } catch (e) {
      next(e);
    }
  }
  update(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
