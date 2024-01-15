-- CreateTable
CREATE TABLE "_FillingToFood" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FillingToFood_A_fkey" FOREIGN KEY ("A") REFERENCES "Filling" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FillingToFood_B_fkey" FOREIGN KEY ("B") REFERENCES "Food" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FillingToFood_AB_unique" ON "_FillingToFood"("A", "B");

-- CreateIndex
CREATE INDEX "_FillingToFood_B_index" ON "_FillingToFood"("B");
