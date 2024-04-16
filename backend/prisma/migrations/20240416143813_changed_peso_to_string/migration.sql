/*
  Warnings:

  - You are about to alter the column `peso` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Animal` MODIFY `peso` VARCHAR(191) NOT NULL;
