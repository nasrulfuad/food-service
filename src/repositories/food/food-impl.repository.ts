import { PrismaClient } from "@prisma/client";
import { foodFactory } from "../../libs/factories/food.factory";
import { IFilling } from "../../models/filling/filling.model";
import { IFoodRepository } from "./food.repository";

export class FoodImplRepository implements IFoodRepository {
  constructor(private dataStore: PrismaClient) {}
  findById(id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  update(t: IFilling, id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  delete(t: IFilling): Promise<void> {
    throw new Error("Method not implemented.");
  }
  create(topping: IFilling): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<IFilling[]> {
    const toppings = await this.dataStore.food.findMany();

    const results = toppings.map(({ id, name, price }) => {
      return foodFactory({
        id,
        name,
        price,
      });
    });

    return results;
  }
}
