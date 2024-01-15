import { IFilling } from "../filling/filling.model";
import { ITopping } from "../topping/topping.model";

export interface IFood {
  id: string;
  name: string;
  price: number;

  getToppings(): ITopping[];
  setTopping(t: ITopping): IFood;
  setToppings(t: ITopping[]): IFood;

  getFillings(): IFilling[];
  setFilling(t: IFilling): IFood;
  setFillings(t: IFilling[]): IFood;
}
