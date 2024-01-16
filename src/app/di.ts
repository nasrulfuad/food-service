import { PrismaClient } from "@prisma/client";
import { FillingImplController } from "../controllers/filling/filling-impl.controller";
import { FoodImplController } from "../controllers/food/food-impl.controller";
import { ToppingImplController } from "../controllers/topping/topping-impl.controller";
import { FillingImplRepository } from "../repositories/filling/filling-impl.repository";
import { FoodImplRepository } from "../repositories/food/food-impl.repository";
import { ToppingImplRepository } from "../repositories/topping/topping-impl.repository";
import { FillingImplService } from "../services/filling/filling-impl.service";
import { FoodImplService } from "../services/food/food-impl.service";
import { ToppingImplService } from "../services/topping/topping-impl.service";
import { OrderImplRepository } from "../repositories/order/order-impl.repository";
import { OrderImplService } from "../services/order/order-impl.service";
import { OrderImplController } from "../controllers/order/order-impl.controller";

export function di({ prisma }: { prisma: PrismaClient }) {
  // TOPPING
  const toppingRepository = new ToppingImplRepository(prisma);
  const toppingService = new ToppingImplService(toppingRepository);
  const toppingController = new ToppingImplController(toppingService);
  // FILLING
  const fillingRepository = new FillingImplRepository(prisma);
  const fillingService = new FillingImplService(fillingRepository);
  const fillingController = new FillingImplController(fillingService);
  // FOOD
  const foodRepository = new FoodImplRepository(prisma);
  const foodService = new FoodImplService(foodRepository);
  const foodController = new FoodImplController(foodService);
  // ORDER
  const orderRepository = new OrderImplRepository(prisma);
  const orderService = new OrderImplService(
    orderRepository,
    foodRepository,
    fillingRepository,
    toppingRepository
  );
  const orderController = new OrderImplController(orderService);

  return {
    topping: {
      controller: toppingController,
      service: toppingService,
      repository: toppingRepository,
    },
    filling: {
      controller: fillingController,
      service: fillingService,
      repository: fillingRepository,
    },
    food: {
      controller: foodController,
      service: foodService,
      repository: foodRepository,
    },
    order: {
      controller: orderController,
      service: orderService,
      repository: orderRepository,
    },
  };
}
