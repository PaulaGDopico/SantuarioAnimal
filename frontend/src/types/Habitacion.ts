import { Animal } from "./Animal";

export interface Habitacion{
    id:number;
    aforo: number;
    animals:Array<Animal>;
}