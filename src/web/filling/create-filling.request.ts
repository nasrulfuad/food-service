import { z } from "zod";

export const createFillingRequest = z.object({
  name: z.string(),
  price: z.number(),
});
