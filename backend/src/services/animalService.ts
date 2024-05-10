import { Prisma } from "@prisma/client";
import prisma from "../prismaClient";

export const getAllAnimals = async (page_num: number, offset: number) => {
	return prisma.animal.findMany({
		skip: offset * (page_num - 1),
		take: offset,
	});
};

export const getAllAnimalsWithoutPagination = async () => {
	return prisma.animal.findMany({})
}

export const getAnimal = async (animalId: number) => {
	return prisma.animal.findUnique({
		where: { id: animalId },
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
		where: { id: animalId },
		data: newData,
	});
};

export const deleteAnimal = async (animalId: number) => {
	try {

		await prisma.$transaction(async (tx) => {

			await tx.donacion.deleteMany({
				where: { animalId: animalId },
			});

			await tx.animal.delete({
				where: { id: animalId },
			});
		});

		return true;
	} catch (error) {
		console.error("Error al eliminar el animal y sus donaciones:", error);
		return false;
	}
}	
