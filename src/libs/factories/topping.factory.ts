import { ToppingImplModel } from "../../models/topping/topping-impl.model";
import { ITopping } from "../../models/topping/topping.model";

export function toppingFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}): ITopping {
  return new ToppingImplModel(id, name, price);
}
