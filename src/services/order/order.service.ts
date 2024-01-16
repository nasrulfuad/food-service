import { IOrder } from "../../models/order/order.model";
import type { TCreateOrderRequest } from "../../web/order/create-order.request";

export interface IOrderService {
  /**
   * Create a new order
   * @param o Order
   */
  create(createOrderRequest: TCreateOrderRequest): Promise<IOrder>;
  /**
   * Get all orderss
   */
  findAll(): Promise<IOrder[]>;
  /**
   * Get an order by id
   * @param id string
   */
  findById(id: IOrder["id"]): Promise<IOrder>;
  /**
   * Delete order by id
   * @param o IOrder
   */
  delete(o: IOrder): Promise<void>;
}
