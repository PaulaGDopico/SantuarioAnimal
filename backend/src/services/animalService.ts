import { Prisma } from "@prisma/client";
import prisma from "../prismaClient";

export const getAllAnimals = async (page_num: number, offset: number) => {
	return prisma.animal.findMany({
		skip: offset * (page_num - 1),
		take: offset,
	});
};

export const createAnimal = async (animal: Prisma.AnimalCreateInput) => {
	return prisma.animal.create({
		data: animal,
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
	return prisma.animal.delete({
		where: { id: animalId },
	});
};
