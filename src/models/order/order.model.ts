export enum OrderItemType {
  FOOD = "food",
  FILLING = "filling",
  TOPPING = "topping",
}

export interface IOrder {
  id: string;
  userName: string;
  totalPrice: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  items: IOrderItem[];
  setItems(orderItems: IOrderItem[]): IOrder;
  setItem(orderItem: IOrderItem): IOrder;
}

export interface IOrderItem {
  id: string;
  name: string;
  price: number;
  orderItemType: OrderItemType;
}
