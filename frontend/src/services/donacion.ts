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

export const getDonacionInfo = async (donacionId:string) => {
    try {
        const response = await fetch(API_URL + "/donaciones/" + donacionId);
        const donaciones = await response.json();
        return donaciones;
    } catch (error) {
        console.log(error);
    }
}

export const getDonacionesOtras = async () => {
    try {
        const response = await fetch(API_URL + "/donaciones/otros");
        const donaciones: Array<Donacion> = await response.json();
        return donaciones;
    } catch (error) {
        console.log(error);
    }
}

export const realizarDonacion = async (donacionId:string, dineroASumar: number) => {

    const response = await fetch(API_URL+"/donaciones/donar/"+donacionId, {
        method: "PUT",
        body: JSON.stringify({"dineroASumar":dineroASumar})
    });
    if (response.ok) {
        const data = await response.json();
        // Manejar la respuesta exitosa, como mostrar un mensaje de éxito o redirigir a una página de inicio de sesión
        console.info(data);
        //location.reload()
    }
    if (!response.ok) {
        throw new Error("Error al intentar subir el animal.");
    }
    return true;
};