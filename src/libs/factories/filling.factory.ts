import { FillingImplModel } from "../../models/filling/filling-impl.model";

export function fillingFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) {
  return new FillingImplModel(id, name, price);
}
