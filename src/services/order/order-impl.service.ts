import { OrderItemImplModel } from "../../models/order/order-impl.model";
import {
  IOrder,
  IOrderItem,
  OrderItemType,
} from "../../models/order/order.model";
import { IFillingRepository } from "../../repositories/filling/filling.repository";
import { IFoodRepository } from "../../repositories/food/food.repository";
import { IOrderRepository } from "../../repositories/order/order.repository";
import { IToppingRepository } from "../../repositories/topping/topping.repository";
import { TCreateOrderRequest } from "../../web/order/create-order.request";
import { IOrderService } from "./order.service";

export class OrderImplService implements IOrderService {
  constructor(
    private orderRepo: IOrderRepository,
    private foodRepo: IFoodRepository,
    private fillingRepo: IFillingRepository,
    private toppingRepo: IToppingRepository
  ) {}

  async create(createOrderRequest: TCreateOrderRequest): Promise<IOrder> {
    const { userName, description, foodIds, fillingIds, toppingIds } =
      createOrderRequest;
    const orderItems: IOrderItem[] = [];

    const foods = await this.foodRepo.findByIds(foodIds);
    if (foods.length === 0) {
      throw new Error("Foods not found");
    }

    orderItems.push(
      ...foods.map(
        (f) => new OrderItemImplModel(f.id, f.name, f.price, OrderItemType.FOOD)
      )
    );

    if (toppingIds && toppingIds?.length > 0) {
      const toppings = await this.toppingRepo.findByIds(toppingIds);
      orderItems.push(
        ...toppings.map(
          (t) =>
            new OrderItemImplModel(t.id, t.name, t.price, OrderItemType.TOPPING)
        )
      );
    }

    if (fillingIds && fillingIds?.length > 0) {
      const fillings = await this.fillingRepo.findByIds(fillingIds);
      orderItems.push(
        ...fillings.map(
          (f) =>
            new OrderItemImplModel(f.id, f.name, f.price, OrderItemType.FILLING)
        )
      );
    }

    const totalPrice = orderItems.reduce((acc, item) => acc + item.price, 0);

    const order: Pick<IOrder, "userName" | "description" | "totalPrice"> = {
      userName,
      description,
      totalPrice,
    };

    console.log(orderItems);
    console.log(totalPrice);
    console.log(order);
    return this.orderRepo.create(order, orderItems);
  }
  findAll(): Promise<IOrder[]> {
    return this.orderRepo.findAll();
  }
  findById(id: string): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  delete(o: IOrder): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
