import { Prisma } from "@prisma/client";
import prisma from "../prismaClient";

export const getAllAfiliados = async()=>{
    return prisma.afiliado.findMany({})
}

export const getAfiliado = async (id:number) => {
    return prisma.afiliado.findUnique({
        where: {
            id:id 
        }
    })
}

export const createAfiliado = async (afiliado: Prisma.AfiliadoCreateInput)=> {
    console.log(afiliado)
    return prisma.afiliado.create({
        data: afiliado,
    });
}

export const deleteAfiliado = async (afiliadoId: number) => {
	return prisma.afiliado.delete({
		where: { id: afiliadoId },
	});
};