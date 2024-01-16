import { z } from "zod";

export const updateToppingRequest = z.object({
  name: z.string().optional(),
  price: z.number().optional(),
});
