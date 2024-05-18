import {Prisma} from "@prisma/client";
import prisma from "../prismaClient";

interface Filtros {
    tipoPerro: boolean,
    tipoGato: boolean,
    urgente: boolean,
    especial: boolean,
    apadrinando: boolean,
    sinEstado: boolean,
    hembra: boolean,
    macho: boolean,
    altura: string,
    peso: string,
    // Agrega más filtros según sea necesario
}

export const getAllAnimals = async (page_num: number, offset: number, filtros: Filtros) => {
    try {
        let where: any = {}; // Inicializar el objeto de filtros

        // Construir el objeto de filtros basado en los parámetros proporcionados
        if (filtros) {
            if (filtros.tipoPerro || filtros.tipoGato) {
                where.tipo = {
                    in: []
                };
                if (filtros.tipoPerro) where.tipo.in.push('PERRO');
                if (filtros.tipoGato) where.tipo.in.push('GATO');
            }
            if (filtros.urgente || filtros.especial || filtros.apadrinando || filtros.sinEstado) {
                where.estado_adopcion = {
                    in: []
                };
                if (filtros.urgente) where.estado_adopcion.in.push('ADOPCION_URGENTE');
                if (filtros.especial) where.estado_adopcion.in.push('CASOS_ESPECIALES');
                if (filtros.apadrinando) where.estado_adopcion.in.push('APADRINANDO');
                if (filtros.sinEstado) where.estado_adopcion.in.push('SIN_ESTADO');
            }
            if (filtros.hembra || filtros.macho) {
                where.sexo = {
                    in: []
                };
                if (filtros.hembra) where.sexo.in.push('HEMBRA');
                if (filtros.macho) where.sexo.in.push('MACHO');
            }
            if (filtros.altura !== "todos") {
                where.tamanyo = {
                    equals: filtros.altura
                };
            }
            if (parseInt(filtros.peso) > 0) {
                where.peso = {
                    equals: filtros.peso
                };
            }
        }

        // Verificar si se proporcionaron filtros
        if (Object.keys(where).length === 0) {
            // Si no se proporcionaron filtros, devolver todos los animales
            return await prisma.animal.findMany({
                skip: offset * (page_num - 1),
                take: offset,
            });
        } else {
            // Si se proporcionaron filtros, aplicarlos a la consulta
            return await prisma.animal.findMany({
                where,
                skip: offset * (page_num - 1),
                take: offset,
            });
        }

    } catch (error) {
        console.error("Error retrieving animales:", error);
        throw error;
    }
};

export const getAllAnimalsWithoutPagination = async () => {
    return prisma.animal.findMany({})
}

export const getFiveFirstAnimals = async () => {
    return prisma.animal.findMany({take: 5})
}


export const getAnimal = async (animalId: number) => {
    return prisma.animal.findUnique({
        where: {id: animalId},
    });
};

export const createAnimal = async (animal: Prisma.AnimalCreateInput) => {
    console.log(animal);
    return prisma.animal.create({
        data: {
            nombre: animal.nombre,
            tipo: animal.tipo,
            estado_adopcion: animal.estado_adopcion,
            peso: animal.peso,
            tamanyo: animal.tamanyo,
            raza: animal.raza,
            fecha_nacimiento: animal.fecha_nacimiento,
            fecha_ingreso: animal.fecha_ingreso,
            sexo: animal.sexo,
            img: animal.img,
            descripcion: animal.descripcion,
            Habitacion: animal.Habitacion,
            Donaciones_recibidas: animal.Donaciones_recibidas,
        },
    });
};

export const updateAnimal = async (
    animalId: number,
    newData: Prisma.AnimalUpdateInput
) => {
    return prisma.animal.update({
        where: {id: animalId},
        data: newData,
    });
};

export const deleteAnimal = async (animalId: number) => {
    try {
        await prisma.$transaction(async (tx) => {
            await tx.donacion.deleteMany({
                where: {animalId: animalId},
            });

            await tx.animal.delete({
                where: {id: animalId},
            });
        });

        return true;
    } catch (error) {
        console.error("Error al eliminar el animal y sus donaciones:", error);
        return false;
    }
};
