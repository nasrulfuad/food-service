import { PrismaClient } from "@prisma/client";
import { FillingImplController } from "../controllers/filling/filling-impl.controller";
import { ToppingImplController } from "../controllers/topping/topping-impl.controller";
import { FillingImplRepository } from "../repositories/filling/filling-impl.repository";
import { ToppingImplRepository } from "../repositories/topping/topping-impl.repository";
import { FillingImplService } from "../services/filling/filling-impl.service";
import { ToppingImplService } from "../services/topping/topping-impl.service";

export function di({ prisma }: { prisma: PrismaClient }) {
  // TOPPING
  const toppingRepository = new ToppingImplRepository(prisma);
  const toppingService = new ToppingImplService(toppingRepository);
  const toppingController = new ToppingImplController(toppingService);
  // FILLING
  const fillingRepository = new FillingImplRepository(prisma);
  const fillingService = new FillingImplService(fillingRepository);
  const fillingController = new FillingImplController(fillingService);

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
  };
}
