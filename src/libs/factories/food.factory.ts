import { FoodImplModel } from "../../models/food/food-impl.model";
import { IFood } from "../../models/food/food.model";

export function foodFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}): IFood {
  return new FoodImplModel(id, name, price);
}
