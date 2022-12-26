/*
  Warnings:

  - You are about to alter the column `count` on the `Views` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Views" ALTER COLUMN "count" SET DATA TYPE INTEGER;
