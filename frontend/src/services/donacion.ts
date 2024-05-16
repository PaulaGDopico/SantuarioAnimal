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