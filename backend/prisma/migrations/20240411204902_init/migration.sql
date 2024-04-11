-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `estado` ENUM('SALUDABLE', 'ENFERMO') NOT NULL,
    `peso` DOUBLE NOT NULL,
    `raza` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `fecha_ingreso` DATETIME(3) NOT NULL,
    `sexo` ENUM('MACHO', 'HEMBRA') NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `descripcion` TEXT NULL,
    `estado_salud` VARCHAR(191) NOT NULL,
    `habitacionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Habitacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aforo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Afiliado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `donacion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Donacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `contexto` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `dinero_necesario` DOUBLE NOT NULL,
    `dinero_alcanzado` DOUBLE NOT NULL,
    `animalId` INTEGER NOT NULL,
    `afiliadoId` INTEGER NOT NULL,

    UNIQUE INDEX `Donacion_img_key`(`img`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_habitacionId_fkey` FOREIGN KEY (`habitacionId`) REFERENCES `Habitacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donacion` ADD CONSTRAINT `Donacion_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donacion` ADD CONSTRAINT `Donacion_afiliadoId_fkey` FOREIGN KEY (`afiliadoId`) REFERENCES `Afiliado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
