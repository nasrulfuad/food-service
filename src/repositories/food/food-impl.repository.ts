import { PrismaClient } from "@prisma/client";
import { foodFactory } from "../../libs/factories/food.factory";
import { IFood } from "../../models/food/food.model";
import { IFoodRepository } from "./food.repository";

export class FoodImplRepository implements IFoodRepository {
  constructor(private dataStore: PrismaClient) {}
  findById(id: string): Promise<IFood> {
    throw new Error("Method not implemented.");
  }
  update(t: IFood, id: string): Promise<IFood> {
    throw new Error("Method not implemented.");
  }
  delete(t: IFood): Promise<void> {
    throw new Error("Method not implemented.");
  }
  create(topping: IFood): Promise<IFood> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<IFood[]> {
    const toppings = await this.dataStore.food.findMany({
      include: {
        fillings: true,
        toppings: true,
      },
    });

    const results = toppings.map(({ id, name, price, toppings, fillings }) => {
      return foodFactory({
        id,
        name,
        price,
      })
        .setFillings(fillings)
        .setToppings(toppings);
    });

    return results;
  }
}
