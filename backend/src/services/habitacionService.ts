import prisma from "../prismaClient";

export const getAllHabitaciones = async () => {
	return prisma.habitacion.findMany();
};

export const getHabitacionById = async (id: number) => {
	return prisma.habitacion.findUnique({
		where: { id },
	});
};

export const createHabitacion = async (aforo: number) => {
	return prisma.habitacion.create({
		data: { aforo },
	});
};

export const updateHabitacion = async (id: number, aforo: number) => {
	return prisma.habitacion.update({
		where: { id },
		data: { aforo },
	});
};

export const deleteHabitacion = async (id: number) => {
	return prisma.habitacion.delete({
		where: { id },
	});
};
