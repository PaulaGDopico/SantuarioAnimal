/*
  Warnings:

  - You are about to drop the column `estado` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `estado_salud` on the `Animal` table. All the data in the column will be lost.
  - You are about to alter the column `tipo` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `estado_adopcion` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Animal` DROP COLUMN `estado`,
    DROP COLUMN `estado_salud`,
    ADD COLUMN `estado_adopcion` ENUM('ADOPCION_URGENTE', 'CASOS_ESPECIALES', 'APADRINANDO', 'SIN_ESTADO') NOT NULL,
    MODIFY `tipo` ENUM('PERRO', 'GATO') NOT NULL;
