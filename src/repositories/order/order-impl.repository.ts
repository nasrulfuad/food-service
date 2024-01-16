import { PrismaClient } from "@prisma/client";
import {
  orderFactory,
  orderItemFactory,
} from "../../libs/factories/order.factory";
import {
  IOrder,
  IOrderItem,
  OrderItemType,
} from "../../models/order/order.model";
import { IOrderRepository } from "./order.repository";
import { OrderImplModel } from "../../models/order/order-impl.model";

export class OrderImplRepository implements IOrderRepository {
  constructor(private dataStore: PrismaClient) {}
  findById(id: string): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  delete(t: IOrder): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(
    order: Pick<IOrder, "userName" | "description" | "totalPrice">,
    orderItems: IOrderItem[]
  ): Promise<IOrder> {
    const orderCreated = await this.dataStore.order.create({
      data: {
        userName: order.userName,
        totalPrice: order.totalPrice,
        description: order.description,
        items: {
          create: orderItems.map((item) => ({
            name: item.name,
            price: item.price,
            orderItemType: item.orderItemType as OrderItemType,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return new OrderImplModel(
      orderCreated.id,
      orderCreated.userName,
      orderCreated.totalPrice,
      orderCreated.description,
      orderCreated.createdAt,
      orderCreated.updatedAt,
      orderCreated.deletedAt
    ).setItems(
      orderCreated.items.map(({ id, price, name, orderItemType }) =>
        orderItemFactory({
          id,
          name,
          price,
          orderItemType: orderItemType as OrderItemType,
        })
      )
    );
  }

  async findAll(): Promise<IOrder[]> {
    const toppings = await this.dataStore.order.findMany({
      include: {
        items: true,
      },
    });

    const results = toppings.map(
      ({
        id,
        userName,
        totalPrice,
        description,
        createdAt,
        updatedAt,
        deletedAt,
        items,
      }) => {
        return orderFactory({
          id,
          userName,
          totalPrice,
          description,
          createdAt,
          updatedAt,
          deletedAt,
          orderItems: items.map((item) =>
            orderItemFactory({
              id: item.id,
              name: item.name,
              price: item.price,
              orderItemType: item.orderItemType as OrderItemType,
            })
          ),
        });
      }
    );

    return results;
  }
}
