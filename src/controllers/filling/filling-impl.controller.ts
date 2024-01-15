import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IFillingService } from "../../services/filling/filling.service";
import { IFillingController } from "./filling.controller";

export class FillingImplController implements IFillingController {
  constructor(private fillingService: IFillingService) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const r = await this.fillingService.findAll();
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
