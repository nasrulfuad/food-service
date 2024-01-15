import { IFilling } from "./filling.model";

export class FillingImpl implements IFilling {
  constructor(public name: string, public price: number) {}
}
