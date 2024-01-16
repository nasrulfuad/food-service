import { PrismaClient } from "@prisma/client";
import { ITopping } from "../src/models/topping/topping.model";
import { ToppingImplModel } from "../src/models/topping/topping-impl.model";
import { IFilling } from "../src/models/filling/filling.model";
import { FillingImplModel } from "../src/models/filling/filling-impl.model";
import { IFood } from "../src/models/food/food.model";
import { FoodImplModel } from "../src/models/food/food-impl.model";

const prisma = new PrismaClient();

const topping: ITopping[] = [
  new ToppingImplModel(
    "4d08c06d-e83d-4185-baf3-1c854329cbe3",
    "Cheese",
    12_000
  ),
  new ToppingImplModel(
    "afc79544-d68d-429c-8c43-e2610ecf8dd8",
    "Chicken",
    18_000
  ),
  new ToppingImplModel("8afdcde3-fd95-43eb-ab2b-2ac122e852f7", "Pepper", 8_000),
  new ToppingImplModel(
    "3e4958e9-396d-40e5-9bb0-312f61e67d65",
    "Blueberry",
    12_000
  ),
  new ToppingImplModel(
    "163c8f3c-58b2-410a-bbd5-91d0c8c3a58f",
    "Sugar Glaze",
    10_000
  ),
  new ToppingImplModel(
    "2585769b-3db4-443b-8caa-be0ed66b65fc",
    "Apple Slices",
    14_000
  ),
];

const fillings: IFilling[] = [
  new FillingImplModel(
    "460d3f95-8bc7-44ef-ac5d-e053dfeffa8a",
    "Cheese",
    12_000
  ),
  new FillingImplModel("69008158-d3b6-4d48-9634-cdc8e0e16d94", "Tomato", 9_000),
  new FillingImplModel("8b1f5b2d-5b90-4113-8b30-46d8e4fb046d", "Tuna", 20_000),
  new FillingImplModel(
    "6b0c85b1-5f19-4439-8621-b062d08c3005",
    "Apple Slices",
    14_000
  ),
  new FillingImplModel(
    "3a38fe1a-e777-42c0-8b0a-e90a30d728aa",
    "Milk Cream",
    10_000
  ),
  new FillingImplModel(
    "cb292f97-50bd-4b7e-9246-77a58db3f1fa",
    "Blue Berry",
    10_000
  ),
  new FillingImplModel(
    "df782b35-a2f6-45e9-84c7-acde1d44d701",
    "Chicken",
    18_000
  ),
];

const foods: { food: IFood; toppingIds: string[]; fillingIds: string[] }[] = [
  {
    food: new FoodImplModel(
      "96fdf3f8-ca84-4088-bbbb-997f0cb1d8e4",
      "Pizza",
      58_000
    ),
    toppingIds: [
      "4d08c06d-e83d-4185-baf3-1c854329cbe3", // Cheese
      "afc79544-d68d-429c-8c43-e2610ecf8dd8", // Chicken
      "8afdcde3-fd95-43eb-ab2b-2ac122e852f7", // Pepper
    ],
    fillingIds: [
      "460d3f95-8bc7-44ef-ac5d-e053dfeffa8a", // Cheese
      "69008158-d3b6-4d48-9634-cdc8e0e16d94", // Tomato
      "8b1f5b2d-5b90-4113-8b30-46d8e4fb046d", // Tuna
    ],
  },
  {
    food: new FoodImplModel(
      "1b5eeb5d-5a4d-4a4b-a09c-005764b4baf5",
      "Doughnut",
      28_000
    ),
    toppingIds: [
      "3e4958e9-396d-40e5-9bb0-312f61e67d65", // Blueberry
      "4d08c06d-e83d-4185-baf3-1c854329cbe3", // Cheese
      "163c8f3c-58b2-410a-bbd5-91d0c8c3a58f", // Sugar Glaze
    ],
    fillingIds: [
      "6b0c85b1-5f19-4439-8621-b062d08c3005", // Apple Slices
      "3a38fe1a-e777-42c0-8b0a-e90a30d728aa", // Milk Cream
      "cb292f97-50bd-4b7e-9246-77a58db3f1fa", // Blueberry
    ],
  },
  {
    food: new FoodImplModel(
      "e8b24ea0-d724-4550-8c3c-d4158a5c1884",
      "Pie",
      45_000
    ),
    toppingIds: [
      "8afdcde3-fd95-43eb-ab2b-2ac122e852f7", // Pepper
      "3e4958e9-396d-40e5-9bb0-312f61e67d65", // Blueberry
      "2585769b-3db4-443b-8caa-be0ed66b65fc", // Apple Slices
    ],
    fillingIds: [
      "8b1f5b2d-5b90-4113-8b30-46d8e4fb046d", // Tuna
      "460d3f95-8bc7-44ef-ac5d-e053dfeffa8a", // Cheese
      "df782b35-a2f6-45e9-84c7-acde1d44d701", // Chicken
    ],
  },
];

export async function runSeed() {
  await prisma.food.deleteMany();
  await prisma.filling.deleteMany();
  await prisma.topping.deleteMany();

  const insertToppings: any[] = [];
  const insertFillings: any[] = [];
  const insertFoods: any[] = [];
  /** We don't use a bulk insert because it's not supported by sqlite */
  topping.map(async ({ id, name, price }) => {
    insertToppings.push(
      prisma.topping.create({
        data: { id, name, price },
      })
    );
  });

  fillings.map(async ({ id, name, price }) => {
    insertFillings.push(
      prisma.filling.create({
        data: {
          id,
          name,
          price,
        },
      })
    );
  });

  foods.map(async ({ food, toppingIds, fillingIds }) => {
    insertFoods.push(
      prisma.food.create({
        data: {
          id: food.id,
          name: food.name,
          price: food.price,
          toppings: {
            connect: toppingIds.map((id) => ({ id })),
          },
          fillings: {
            connect: fillingIds.map((id) => ({ id })),
          },
        },
      })
    );
  });

  await Promise.all(insertToppings);
  await Promise.all(insertFillings);
  await Promise.all(insertFoods);

  const fffs = await prisma.food.findFirst({
    include: {
      toppings: true,
      fillings: true,
    },
  });
  console.log(fffs);
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
