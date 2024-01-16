import { IFood } from "../../models/food/food.model";

export interface IFoodRepository {
  findAll(): Promise<IFood[]>;
  findById(id: IFood["id"]): Promise<IFood>;
  findByIds(ids: IFood["id"][]): Promise<IFood[]>;
  update(t: IFood, id: IFood["id"]): Promise<IFood>;
  delete(t: IFood): Promise<void>;
  create(topping: IFood): Promise<IFood>;
}
