-- DropForeignKey
ALTER TABLE `Animal` DROP FOREIGN KEY `Animal_afiliadoId_fkey`;

-- AlterTable
ALTER TABLE `Animal` MODIFY `afiliadoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_afiliadoId_fkey` FOREIGN KEY (`afiliadoId`) REFERENCES `Afiliado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
