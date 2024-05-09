/*
  Warnings:

  - Added the required column `afiliadoId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Animal` ADD COLUMN `afiliadoId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_afiliadoId_fkey` FOREIGN KEY (`afiliadoId`) REFERENCES `Afiliado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
