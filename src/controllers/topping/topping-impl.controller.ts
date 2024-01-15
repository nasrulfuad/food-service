import { NextFunction, Request, Response } from "express";
import { ITopping } from "../../models/topping/topping.model";
import { IToppingService } from "../../services/topping/topping.service";
import { IToppingController } from "./topping.controller";

export class ToppingImplController implements IToppingController {
  constructor(private toppingService: IToppingService) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    console.log("OKEE");
    const r = await this.toppingService.findAll();
    return res.json(r);
  }

  findById(id: string): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
  update(t: ITopping, id: string): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
  delete(t: ITopping): Promise<void> {
    throw new Error("Method not implemented.");
  }
  create(topping: ITopping): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
}
