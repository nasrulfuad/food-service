import { ITopping } from "./topping.model";

export class ToppingImplModel implements ITopping {
  constructor(public id: string, public name: string, public price: number) {}
}
