-- CreateTable
CREATE TABLE "_FoodToTopping" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FoodToTopping_A_fkey" FOREIGN KEY ("A") REFERENCES "Food" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FoodToTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "Topping" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoodToTopping_AB_unique" ON "_FoodToTopping"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodToTopping_B_index" ON "_FoodToTopping"("B");
