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

export const addDonacion = async (donacion: Donacion) => {
    try {
        const formData = new FormData;
        formData.append("titulo", donacion.titulo)
        formData.append("contexto", donacion.contexto)
        formData.append("image", donacion.img)
        formData.append("dinero_necesario", donacion.dinero_necesario)
        formData.append("dinero_alcanzado", donacion.dinero_alcanzado)
        formData.append("fecha_inicio", donacion.fecha_inicio)
        formData.append("animalId", donacion.animalId.toString())
        formData.append("afiliadoId", donacion.afiliadoId.toString())
        const response = await fetch(API_URL + "/donaciones", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            const data = await response.json();
            console.info("Subida exitoso:", data);
        }
        if (!response.ok) {
            throw new Error("Error al intentar subir el animal.");
        }
        return true
    } catch (error) {
        console.log(error)
    }
}