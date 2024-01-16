import { IOrder, IOrderItem, OrderItemType } from "./order.model";

export class OrderImplModel implements IOrder {
  public items: IOrderItem[] = [];
  constructor(
    public id: string,
    public userName: string,
    public totalPrice: number,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null
  ) {}

  setItems(orderItems: IOrderItem[]): IOrder {
    this.items.push(...orderItems);
    return this;
  }

  setItem(orderItem: IOrderItem): IOrder {
    this.items.push(orderItem);
    return this;
  }
}

export class OrderItemImplModel implements IOrderItem {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public orderItemType: OrderItemType
  ) {}
}
