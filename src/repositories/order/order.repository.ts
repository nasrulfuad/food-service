import { IOrder, IOrderItem } from "../../models/order/order.model";

export interface IOrderRepository {
  findAll(): Promise<IOrder[]>;
  findById(id: IOrder["id"]): Promise<IOrder>;
  delete(o: IOrder): Promise<void>;
  create(
    order: Pick<IOrder, "userName" | "description" | "totalPrice">,
    orderItems: IOrderItem[]
  ): Promise<IOrder>;
}
