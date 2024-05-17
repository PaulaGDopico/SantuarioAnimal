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
        data: {
            titulo: donacion.titulo,
            contexto: donacion.contexto,
            dinero_necesario: donacion.dinero_necesario,
            dinero_alcanzado: donacion.dinero_alcanzado,
            fecha_inicio: donacion.fecha_inicio,
            animal: donacion.animal,
            afiliado: donacion.afiliado,
            img: donacion.img,
        },
    });
}

export const updateDonacion = async (
    donacionId: number,
    newData: Prisma.DonacionUpdateInput
) => {
    return prisma.donacion.update({
        where: {id: donacionId},
        data: {
            titulo: newData.titulo,
            contexto: newData.contexto,
            dinero_necesario: newData.dinero_necesario,
            dinero_alcanzado: newData.dinero_alcanzado,
            fecha_inicio: newData.fecha_inicio,
            animal: newData.animal,
            afiliado: newData.afiliado,
            img: newData.img,
        },
    });
};

export const updateDineroAlcanzado = async (donacionId: number, dineroASumar: number) => {
    try {
        const donacion = await getDonacion(donacionId);
        if (!donacion) {
            return {success: false, error: "No existe esa donación"};
        }
        if (dineroASumar < 0) {
            return {success: false, error: "No se admiten números negativos"};
        }

        const antiguoDineroAlcanzado = parseInt(donacion.dinero_alcanzado);
        const nuevoDineroAlcanzado = antiguoDineroAlcanzado + dineroASumar;

        if (nuevoDineroAlcanzado > parseInt(donacion.dinero_necesario)) {
            return {success: false, error: "Ya se ha alcanzado el dinero necesario."}
        }
        const updatedDonacion = await prisma.donacion.update({
            where: {id: donacionId},
            data: {dinero_alcanzado: nuevoDineroAlcanzado.toString()}
        });
        return {success: true, data: updatedDonacion};
    } catch (error) {
        console.error("Error updating donacion:", error);
        return {success: false, error: "Internal server error"};
    }
}

export const deleteDonacion = async (donacionId: number) => {
    return prisma.donacion.delete({
        where: {id: donacionId},
    });
};