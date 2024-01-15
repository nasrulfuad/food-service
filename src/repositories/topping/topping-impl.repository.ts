import { ITopping } from "../../models/topping/topping.model";
import { IToppingRepository } from "./topping.repository";

export class ToppingImplRepository implements IToppingRepository {
  constructor(dataStore: ) {}

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
  create(topping: ITopping): Promise<ITopping> {
    throw new Error("Method not implemented.");
  }
}
