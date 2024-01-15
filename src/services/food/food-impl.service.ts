import { IFilling } from "../../models/filling/filling.model";
import { IFoodRepository } from "../../repositories/food/food.repository";
import { IFoodService } from "./food.service";

export class FoodImplService implements IFoodService {
  constructor(private foodRepo: IFoodRepository) {}
  create(t: IFilling): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  update(t: IFilling, id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  delete(t: IFilling): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<IFilling[]> {
    /** Business process here */
    return this.foodRepo.findAll();
  }
}
