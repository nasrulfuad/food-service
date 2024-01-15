import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IFoodController } from "./food.controller";
import { IFoodService } from "../../services/food/food.service";

export class FoodImplController implements IFoodController {
  constructor(private foodService: IFoodService) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const r = await this.foodService.findAll();
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
