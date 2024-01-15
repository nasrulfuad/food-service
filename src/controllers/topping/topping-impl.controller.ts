import { NextFunction, Request, Response } from "express";
import { ITopping } from "../../models/topping/topping.model";
import { IToppingService } from "../../services/topping/topping.service";
import { IToppingController } from "./topping.controller";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class ToppingImplController implements IToppingController {
  constructor(private toppingService: IToppingService) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const r = await this.toppingService.findAll();
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
  create(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
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
