/*
  Warnings:

  - Added the required column `afiliadoId` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanyo` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Donacion` DROP FOREIGN KEY `Donacion_animalId_fkey`;

-- AlterTable
ALTER TABLE `Animal` ADD COLUMN `afiliadoId` INTEGER NOT NULL,
    ADD COLUMN `tamanyo` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_afiliadoId_fkey` FOREIGN KEY (`afiliadoId`) REFERENCES `Afiliado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donacion` ADD CONSTRAINT `Donacion_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
