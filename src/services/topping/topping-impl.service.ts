import {
  ToppingImpl,
  ToppingImplModel,
} from "../../models/topping/topping-impl.model";
import { ITopping } from "../../models/topping/topping.model";
import { IToppingService } from "./topping.service";

export class ToppingImplService implements IToppingService {
  constructor(toppingRepo: ToppingImpl) {}

  findAll(): Promise<ITopping[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string | undefined): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
  update(t: ITopping, id: string | undefined): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
  delete(t: ITopping): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(topping: ITopping): Promise<ITopping> {
    return new ToppingImplModel(topping.name, topping.price);
  }
}
