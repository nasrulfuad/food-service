import { IFood } from "../../models/food/food.model";
import { IFoodRepository } from "../../repositories/food/food.repository";
import { IFoodService } from "./food.service";

export class FoodImplService implements IFoodService {
  constructor(private foodRepo: IFoodRepository) {}
  create(t: IFood): Promise<IFood> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IFood> {
    throw new Error("Method not implemented.");
  }
  update(t: IFood, id: string): Promise<IFood> {
    throw new Error("Method not implemented.");
  }
  delete(t: IFood): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<IFood[]> {
    /** Business process here */
    return this.foodRepo.findAll();
  }
}
