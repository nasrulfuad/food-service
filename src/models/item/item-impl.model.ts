import { IItem } from "./item.model";

export class IItemImpl implements IItem {
  constructor(public name: string, public price: number) {}
}
