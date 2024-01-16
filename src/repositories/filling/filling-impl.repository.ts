import { PrismaClient } from "@prisma/client";
import { fillingFactory } from "../../libs/factories/filling.factory";
import { IFilling } from "../../models/filling/filling.model";
import { IFillingRepository } from "./filling.repository";

export class FillingImplRepository implements IFillingRepository {
  constructor(private dataStore: PrismaClient) {}
  findById(id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  async findByIds(ids: string[]): Promise<IFilling[]> {
    const fillings = await this.dataStore.filling.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    const results = fillings.map(({ id, name, price }) => {
      return fillingFactory({
        id,
        name,
        price,
      });
    });

    return results;
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
    const toppings = await this.dataStore.filling.findMany();

    const results = toppings.map(({ id, name, price }) => {
      return fillingFactory({
        id,
        name,
        price,
      });
    });

    return results;
  }
}
