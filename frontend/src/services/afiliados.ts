import {API_URL} from "@/middleware/secrets";
import {Afiliado} from "@/types/Afiliado";


export const getAfiliados = async () => {
    try {
        const response = await fetch(
            API_URL + "/afiliado",
        );
        const afiliados: Array<Afiliado> = await response.json();
        return afiliados;
    } catch (error) {
        console.log(error);
    }
};