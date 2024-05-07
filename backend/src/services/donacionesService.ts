import { Prisma } from "@prisma/client";
import prisma from "../prismaClient";

export const getAllDonaciones = async()=>{
    return prisma.donacion.findMany({
        include: {
            animal: {
                select: {
                    nombre: true
                }
            }
        }
    })
}

export const getDonacion = async (id:number) => {
    return prisma.donacion.findUnique({
        where: {
            id:id 
        },
		include: {
            animal: {
                select: {
                    nombre: true
                }
            }
        }
    })
}

export const createDonacion = async (donacion: Prisma.DonacionCreateInput)=>{
    console.log(donacion);
	return prisma.donacion.create({
		data: donacion,
	});
}

export const updateDonacion = async (
	donacionId: number,
	newData: Prisma.DonacionUpdateInput
) => {
	return prisma.donacion.update({
		where: { id: donacionId },
		data: newData,
	});
};

export const deleteDonacion = async (donacionId: number) => {
	return prisma.donacion.delete({
		where: { id: donacionId },
	});
};