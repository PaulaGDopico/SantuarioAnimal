import { Donacion } from "./Donacion";

export interface Animal {
	id:number;
	createdAt: string;
	updatedAt: string;
	nombre: string;
	tipo: string;
	estado_adopcion: string;
	peso: string;
	tamanyo: string,
	raza: string;
	fecha_nacimiento: string;
	fecha_ingreso: string;
	sexo: string;
	img: string;
	descripcion: string | null;
	habitacionId: number;
	donaciones_recibidas: Array<Donacion> | null;
	afiliadoId: number | null;
}
