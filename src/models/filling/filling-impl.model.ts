import { IFilling } from "./filling.model";

export class FillingImplModel implements IFilling {
  constructor(public id: string, public name: string, public price: number) {}
}
