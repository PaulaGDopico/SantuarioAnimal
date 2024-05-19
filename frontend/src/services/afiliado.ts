import {API_URL} from "@/middleware/secrets";
import {Afiliado} from "@/types/Afiliado";

export const getAfiliados = async (): Promise<Array<Afiliado>> => {
    try {
        const url = API_URL + "/afiliado";
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error("Afiliados no encontrados")
    }
};

interface DatosAfiliado {
    nombre: string,
    apellidos: string,
    telefono: string,
    email: string,
}

export const postAfiliado = async (datosAfiliado: DatosAfiliado) => {
    try {
        const url = API_URL + "/afiliado";
        const afiliado = {
            "nombre": datosAfiliado.nombre + " " + datosAfiliado.apellidos,
            "telefono": datosAfiliado.telefono,
            "email": datosAfiliado.email
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(afiliado)
        })
        return await response.json()
    } catch (error) {
        throw new Error("No se ha podido añadir el afiliado")
    }
}