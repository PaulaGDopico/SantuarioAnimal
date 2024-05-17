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
        data: newData,
    });
};

export const updateDineroAlcanzado = async (donacionId: number, dineroASumar: number) => {
    try {
        console.log(`
        Dinero a sumar: ${dineroASumar}:${typeof dineroASumar}
        `);
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
            return {success: false, error: "Ya se ha alcanzado el dinero necesario."};
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
};

export const deleteDonacion = async (donacionId: number) => {
    return prisma.donacion.delete({
        where: {id: donacionId},
    });
};

//MOSTRAR 5 doanciones no completadas

export const getFiveDonations = async () => {
    try {
        // Obtener todas las donaciones
        const donaciones = await prisma.donacion.findMany({
            include: {
                animal: {
                    select: {
                        nombre: true
                    }
                }
            }
        })

        // Filtrar las donaciones no completadas
        const donacionesNoCompletadas = donaciones.filter(donacion => {
            // Convertir los valores de dinero a números
            const dineroNecesario = parseInt(donacion.dinero_necesario);
            const dineroAlcanzado = parseInt(donacion.dinero_alcanzado);

            // Verificar si el dinero alcanzado es menor que el dinero necesario
            return dineroAlcanzado < dineroNecesario;
        });

        // Tomar las primeras 5 donaciones no completadas
        const donacionesNoCompletadasLimitadas = donacionesNoCompletadas.slice(0, 5);

        return donacionesNoCompletadasLimitadas;
    } catch (error) {
        console.error('Error al obtener las donaciones:', error);
        throw error;
    }
}