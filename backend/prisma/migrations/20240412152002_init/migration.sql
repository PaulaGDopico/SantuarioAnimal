/*
  Warnings:

  - Added the required column `fecha_inicio` to the `Donacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Donacion` ADD COLUMN `fecha_inicio` DATETIME(3) NOT NULL;
