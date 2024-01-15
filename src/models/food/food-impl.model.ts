import { IFilling } from "../filling/filling.model";
import { ITopping } from "../topping/topping.model";
import { IFood } from "./food.model";

export class FoodImplModel implements IFood {
  private fillings: IFilling[] = [];
  private toppings: ITopping[] = [];

  constructor(public id: string, public name: string, public price: number) {}

  getToppings(): ITopping[] {
    return this.toppings;
  }
  setToppings(t: ITopping[]): ThisType<IFood> {
    this.toppings.push(...t);
    return this;
  }
  setTopping(t: ITopping): ThisType<IFood> {
    this.toppings.push(t);
    return this;
  }
  getFillings(): IFilling[] {
    return this.fillings;
  }
  setFillings(t: IFilling[]): IFood {
    this.fillings.push(...t);
    return this;
  }
  setFilling(t: IFilling): IFood {
    this.fillings.push(t);
    return this;
  }
}
