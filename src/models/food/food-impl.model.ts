import { IFood } from "./food.model";

export class FoodImplModel implements IFood {
  constructor(public id: string, public name: string, public price: number) {}
}
