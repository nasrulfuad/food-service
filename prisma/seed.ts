import { PrismaClient } from "@prisma/client";
import { ITopping } from "../src/models/topping/topping.model";
import { ToppingImplModel } from "../src/models/topping/topping-impl.model";
import { IFilling } from "../src/models/filling/filling.model";
import { FillingImplModel } from "../src/models/filling/filling-impl.model";
import { IFood } from "../src/models/food/food.model";
import { FoodImplModel } from "../src/models/food/food-impl.model";

const prisma = new PrismaClient();

const topping: ITopping[] = [
  new ToppingImplModel("", "Cheese", 12_000),
  new ToppingImplModel("", "Chicken", 18_000),
  new ToppingImplModel("", "Pepper", 8_000),
  new ToppingImplModel("", "Blueberry", 12_000),
  new ToppingImplModel("", "Sugar Glaze", 10_000),
  new ToppingImplModel("", "Apple Slices", 14_000),
];

const fillings: IFilling[] = [
  new FillingImplModel("", "Cheese", 12_000),
  new FillingImplModel("", "Tomato", 9_000),
  new FillingImplModel("", "Tuna", 20_000),
  new FillingImplModel("", "Apple Slices", 14_000),
  new FillingImplModel("", "Milk Cream", 10_000),
  new FillingImplModel("", "Blue Berry", 10_000),
  new FillingImplModel("", "Chicken", 18_000),
];

const foods: IFood[] = [
  new FoodImplModel("", "Pizza", 58_000),
  new FoodImplModel("", "Doughnut", 28_000),
  new FoodImplModel("", "Pie", 45_000),
];

async function runSeed() {
  await prisma.food.deleteMany();
  await prisma.filling.deleteMany();
  await prisma.topping.deleteMany();

  const inserts: any[] = [];
  /** We don't use a bulk insert because it's not supported by sqlite */
  topping.map(async ({ name, price }) => {
    inserts.push(
      prisma.topping.create({
        data: { name, price },
      })
    );
  });

  fillings.map(async ({ name, price }) => {
    inserts.push(
      prisma.filling.create({
        data: {
          name,
          price,
        },
      })
    );
  });

  foods.map(async ({ name, price }) => {
    inserts.push(
      prisma.food.create({
        data: {
          name,
          price,
        },
      })
    );
  });

  await Promise.all(inserts);
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
