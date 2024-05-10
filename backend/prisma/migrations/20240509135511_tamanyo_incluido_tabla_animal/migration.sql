/*
  Warnings:

  - Added the required column `tamanyo` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Animal` ADD COLUMN `tamanyo` VARCHAR(191) NOT NULL;
