import {
  OrderImplModel,
  OrderItemImplModel,
} from "../../models/order/order-impl.model";
import {
  IOrder,
  IOrderItem,
  OrderItemType,
} from "../../models/order/order.model";

export function orderFactory({
  id,
  userName,
  description,
  createdAt,
  updatedAt,
  deletedAt,
  totalPrice,
  orderItems,
}: {
  id: string;
  userName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  totalPrice: number;
  orderItems: IOrderItem[];
}): IOrder {
  return new OrderImplModel(
    id,
    userName,
    totalPrice,
    description,
    createdAt,
    updatedAt,
    deletedAt
  ).setItems(orderItems);
}

export function orderItemFactory({
  id,
  name,
  price,
  orderItemType,
}: {
  id: string;
  name: string;
  price: number;
  orderItemType: OrderItemType;
}): IOrderItem {
  return new OrderItemImplModel(id, name, price, orderItemType);
}
