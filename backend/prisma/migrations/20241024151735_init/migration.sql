/*
  Warnings:

  - You are about to drop the column `bio` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `DeliveryBoy` table. All the data in the column will be lost.
  - You are about to drop the column `ChifeId` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientsId` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `ingredient` on the `Ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientPrice` on the `Ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `ChifeId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Chife` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ChiefId` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dishId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_ChifeId_fkey";

-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_ingredientsId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_dishId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_ChifeId_fkey";

-- DropIndex
DROP INDEX "DeliveryBoy_email_key";

-- AlterTable
ALTER TABLE "DeliveryBoy" DROP COLUMN "bio",
DROP COLUMN "email",
DROP COLUMN "imageUrl",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "phoneNumber";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "ChifeId",
DROP COLUMN "ingredientsId",
ADD COLUMN     "ChiefId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "ingredient",
DROP COLUMN "ingredientPrice",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "ChifeId",
ADD COLUMN     "dishId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Chife";

-- DropTable
DROP TABLE "Favorite";

-- CreateTable
CREATE TABLE "Chief" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "IDCard" TEXT[],
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chief_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngDish" (
    "id" SERIAL NOT NULL,
    "dishId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "added" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IngDish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientToDish" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Chief_email_key" ON "Chief"("email");

-- CreateIndex
CREATE UNIQUE INDEX "IngDish_dishId_ingredientId_orderId_key" ON "IngDish"("dishId", "ingredientId", "orderId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToDish_AB_unique" ON "_ClientToDish"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToDish_B_index" ON "_ClientToDish"("B");

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_ChiefId_fkey" FOREIGN KEY ("ChiefId") REFERENCES "Chief"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngDish" ADD CONSTRAINT "IngDish_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngDish" ADD CONSTRAINT "IngDish_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngDish" ADD CONSTRAINT "IngDish_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToDish" ADD CONSTRAINT "_ClientToDish_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToDish" ADD CONSTRAINT "_ClientToDish_B_fkey" FOREIGN KEY ("B") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
