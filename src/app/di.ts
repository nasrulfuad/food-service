import { PrismaClient } from "@prisma/client";
import { ToppingImplRepository } from "../repositories/topping/topping-impl.repository";
import { ToppingImplService } from "../services/topping/topping-impl.service";
import { ToppingImplController } from "../controllers/topping/topping-impl.controller";

export function di({ prisma }: { prisma: PrismaClient }) {
  const toppingRepository = new ToppingImplRepository(prisma);
  const toppingService = new ToppingImplService(toppingRepository);
  const toppingController = new ToppingImplController(toppingService);

  return {
    topping: {
      controller: toppingController,
      service: toppingService,
      repository: toppingRepository,
    },
  };
}
