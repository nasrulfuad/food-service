/*
  Warnings:

  - Added the required column `name` to the `Topping` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Topping" ("id", "price") SELECT "id", "price" FROM "Topping";
DROP TABLE "Topping";
ALTER TABLE "new_Topping" RENAME TO "Topping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
