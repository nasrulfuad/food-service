import { FillingImplModel } from "../../models/filling/filling-impl.model";
import { IFilling } from "../../models/filling/filling.model";

export function fillingFactory({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}): IFilling {
  return new FillingImplModel(id, name, price);
}
