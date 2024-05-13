import {API_URL} from "@/middleware/secrets";
import {Afiliado} from "@/types/Afiliado";

export const getAfiliados = async (): Promise<Array<Afiliado>> => {
    try {
        const url = API_URL + "/afiliado";
        const response = await fetch(url);
        const afiliados: Array<Afiliado> = await response.json();
        console.log(response);
        return afiliados;
    } catch (error) {
        throw new Error("Afiliados no encontrados")
    }
};