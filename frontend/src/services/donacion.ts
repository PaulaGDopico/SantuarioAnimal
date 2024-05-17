import {API_URL} from "@/middleware/secrets";
import {Donacion} from "@/types/Donacion";

export const getDonaciones = async () => {
    try {
        const response = await fetch(API_URL + "/donaciones");
        const donaciones: Array<Donacion> = await response.json();
        return donaciones;
    } catch (error) {
        console.log(error);
    }
}

export const addDonacion = async (donacion: {
    dinero_alcanzado: string;
    afiliadoId: string;
    img: any;
    fecha_inicio: string;
    titulo: string;
    dinero_necesario: string;
    animalId: string;
    contexto: string
}) => {
    try {
        const formData = new FormData;
        formData.append("titulo", donacion.titulo)
        formData.append("contexto", donacion.contexto)
        formData.append("image", donacion.img)
        formData.append("dinero_necesario", donacion.dinero_necesario)
        formData.append("dinero_alcanzado", donacion.dinero_alcanzado)
        formData.append("fecha_inicio", donacion.fecha_inicio)
        formData.append("animalId", donacion.animalId)
        formData.append("afiliadoId", donacion.afiliadoId)
        const response = await fetch(API_URL + "/donaciones", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            const data = await response.json();
            console.info("Subida exitoso:", data);
        }
        if (!response.ok) {
            throw new Error("Error al intentar subir la donación.");
        }
        return true
    } catch (error) {
        console.log(error)
    }
}
export const deleteDonacion = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/donaciones/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al intentar eliminar la donación.");
        }
        return true;
    } catch (error) {
        console.error("Error al eliminar la donación:", error);
        return false;
    }
}
export const putDonacion = async (id: string, donacion: {
    dinero_alcanzado: string;
    afiliadoId: string;
    img: any;
    fecha_inicio: string;
    titulo: string;
    dinero_necesario: string;
    animalId: string;
    contexto: string
}) => {
    try {

        const formData = new FormData;
        formData.append("titulo", donacion.titulo)
        formData.append("contexto", donacion.contexto)
        formData.append("image", donacion.img)
        formData.append("dinero_necesario", donacion.dinero_necesario)
        formData.append("dinero_alcanzado", donacion.dinero_alcanzado)
        formData.append("fecha_inicio", donacion.fecha_inicio)
        formData.append("animalId", donacion.animalId)
        formData.append("afiliadoId", donacion.afiliadoId)
        const response = await fetch(API_URL + "/donaciones/" + id, {
            method: "PUT",
            body: formData,
        })
        if (response.ok) {
            const data = await response.json();
            console.info("Subida exitoso:", data);
        }
        if (!response.ok) {
            throw new Error("Error al intentar subir la donación.");
        }
        return true
    } catch (error) {
        console.log(error)
    }
}