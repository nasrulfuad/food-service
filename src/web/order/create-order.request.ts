import { z } from "zod";

export const createOrderRequest = z.object({
  userName: z.string(),
  description: z.string(),
  foodIds: z.array(z.string()),
  toppingIds: z.array(z.string()).max(1).optional(),
  fillingIds: z.array(z.string()).max(1).optional(),
});

export type TCreateOrderRequest = z.infer<typeof createOrderRequest>;
