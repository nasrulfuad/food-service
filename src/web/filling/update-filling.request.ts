import { z } from "zod";

export const updateFillingRequest = z.object({
  name: z.string().optional(),
  price: z.number().optional(),
});
