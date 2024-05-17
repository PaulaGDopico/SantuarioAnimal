export interface Donacion {
    id:string,
    titulo:string,
    contexto:string,
    img:string,
    dinero_necesario:string,
    dinero_alcanzado:string,
    fecha_inicio:string,  
    animalId:number,
    afiliadoId:number
    animal: {
        nombre: string
    }
}