import { z } from "zod";

export const createToppingRequest = z.object({
  name: z.string(),
  price: z.number(),
});
