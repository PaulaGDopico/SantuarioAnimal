import {Donacion} from "@/types/Donacion";
import {Animal} from "@/types/Animal";

export interface Afiliado {
    id: number,
    nombre: string,
    email: string,
    telefono: string,
    Donaciones_realizadas: Donacion[]
    Animales_custodiados: Animal[]
}