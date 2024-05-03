/*
  Warnings:

  - You are about to alter the column `dinero_necesario` on the `Donacion` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `dinero_alcanzado` on the `Donacion` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Donacion` MODIFY `dinero_necesario` VARCHAR(191) NOT NULL,
    MODIFY `dinero_alcanzado` VARCHAR(191) NOT NULL;
