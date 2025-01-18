-- CreateEnum
CREATE TYPE "Block" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('two', 'four');

-- CreateTable
CREATE TABLE "Visitor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "block" "Block" NOT NULL,
    "type" "Type" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "houseno" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "vehno" TEXT NOT NULL,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visitor_vehno_key" ON "Visitor"("vehno");
