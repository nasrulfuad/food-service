import { PrismaClient } from "@prisma/client";
import { ITopping } from "../src/models/topping/topping.model";
import { ToppingImplModel } from "../src/models/topping/topping-impl.model";

const prisma = new PrismaClient();

const topping: ITopping[] = [
  new ToppingImplModel("Cheese", 12_000),
  new ToppingImplModel("Chicken", 18_000),
  new ToppingImplModel("Pepper", 8_000),
  new ToppingImplModel("Blueberry", 12_000),
  new ToppingImplModel("Sugar Glaze", 10_000),
  new ToppingImplModel("Apple Slices", 14_000),
];

async function runSeed() {
  // await prisma.item.deleteMany();
  // await prisma.filling.deleteMany();
  await prisma.topping.deleteMany();

  /** We don't use a bulk insert because it's not supported by sqlite */
  await Promise.all(
    topping.map(async (t) => {
      await prisma.topping.create({
        data: t,
      });
    })
  );
}

runSeed()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeded successfully");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
