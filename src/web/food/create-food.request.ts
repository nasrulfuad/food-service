import { z } from "zod";

export const createFoodRequest = z.object({
  name: z.string(),
  price: z.number(),
  /** To make a food and add relation to the existing toppings */
  toppingIds: z.array(z.string()).optional(),
  /** To make a food and add relation to the existing fillings */
  fillingIds: z.array(z.string()).optional(),
});
