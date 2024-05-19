/*
  Warnings:

  - The values [APADRINANDO] on the enum `Animal_estado_adopcion` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Animal` MODIFY `estado_adopcion` ENUM('ADOPCION_URGENTE', 'CASOS_ESPECIALES', 'APADRINADO', 'SIN_ESTADO') NOT NULL;
