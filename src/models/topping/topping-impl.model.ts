import { ITopping } from "./topping.model";

export class ToppingImplModel implements ITopping {
  constructor(public name: string, public price: number) {}
}
