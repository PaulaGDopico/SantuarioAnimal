import prisma from "../prismaClient";

export const getAllAnimals = async (page_num: number, offset: number) => {
	return prisma.animal.findMany({
		skip: offset * (page_num - 1),
		take: offset,
	});
};

// export const createAnimal = async (animal: any) => {
// 	return prisma.animal.create({animal});
// };
