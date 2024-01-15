import { PrismaClient } from "@prisma/client";
import { ITopping } from "../../models/topping/topping.model";
import { IToppingRepository } from "./topping.repository";
import { toppingFactory } from "../../libs/factories/topping.factory";

export class ToppingImplRepository implements IToppingRepository {
  constructor(private dataStore: PrismaClient) {}

  async findAll(): Promise<ITopping[]> {
    const toppings = await this.dataStore.topping.findMany();

    const results = toppings.map(({ id, name, price }) => {
      return toppingFactory({
        id,
        name,
        price,
      });
    });

    return results;
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
