import { FoodImplModel } from "../../models/food/food-impl.model";

export function foodFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) {
  return new FoodImplModel(id, name, price);
}
