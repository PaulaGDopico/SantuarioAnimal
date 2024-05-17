
import { Donacion } from "./Donacion";
import { Animal } from "./Animal";

export interface Afiliado {
    id:number | null;
    nombre:string;
    email:string;
    telefono:string;
    Donaciones_realizadas:Array<Donacion>
    Animales_custodiados:Array<Animal>
}