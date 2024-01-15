import { ToppingImplModel } from "../../models/topping/topping-impl.model";

export function toppingFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) {
  return new ToppingImplModel(id, name, price);
}
