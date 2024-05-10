-- DropForeignKey
ALTER TABLE `Donacion` DROP FOREIGN KEY `Donacion_animalId_fkey`;

-- AddForeignKey
ALTER TABLE `Donacion` ADD CONSTRAINT `Donacion_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
