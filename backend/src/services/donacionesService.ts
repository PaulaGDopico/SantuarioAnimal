import {Prisma} from "@prisma/client";
import prisma from "../prismaClient";

export const getAllDonaciones = async () => {
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

export const getDonacion = async (id: number) => {
    return prisma.donacion.findUnique({
        where: {
            id: id
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

export const createDonacion = async (donacion: Prisma.DonacionCreateInput) => {
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
        where: {id: donacionId},
        data: newData,
    });
};

export const updateDineroAlcanzado = async (donacionId: number, dineroASumar: number) => {
    const donacion = await getDonacion(donacionId);
    if (!donacion) {
        throw new Error("No existe esa donación")
    }
    const antiguoDineroAlcanzado = parseInt(donacion.dinero_alcanzado)
    const nuevoDineroAlcanzado = antiguoDineroAlcanzado + dineroASumar
    return prisma.donacion.update({
        where: {id: donacionId},
        data: {dinero_alcanzado: nuevoDineroAlcanzado.toString()}
    })
}

export const deleteDonacion = async (donacionId: number) => {
    return prisma.donacion.delete({
        where: {id: donacionId},
    });
};