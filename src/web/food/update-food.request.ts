import { z } from "zod";

export const updateFoodRequest = z.object({
  name: z.string().optional(),
  price: z.number().optional(),
  /** To make a food and add relation to the existing toppings */
  toppingIds: z.array(z.string()).optional(),
  /** To make a food and add relation to the existing fillings */
  fillingIds: z.array(z.string()).optional(),
});
