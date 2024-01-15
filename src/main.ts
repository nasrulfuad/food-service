import { PrismaClient } from "@prisma/client";
import { app } from "./app/app";
import { ToppingImplController } from "./controllers/topping/topping-impl.controller";
import { ToppingImplRepository } from "./repositories/topping/topping-impl.repository";
import { ToppingImplService } from "./services/topping/topping-impl.service";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
