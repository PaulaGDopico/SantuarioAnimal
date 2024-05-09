import { Donacion } from "./Donacion";

export interface Animal {
	createdAt: string;
	updatedAt: string;
	nombre: string;
	tipo: string;
	estado_adopcion: string;
	peso: string;
	tamanyo: string,
	raza: string;
	fecha_nacimiento: Date;
	fecha_ingreso: Date;
	sexo: string;
	img: string;
	descripcion: string | null;
	habitacionId: number;
	donaciones_recibidas: Array<Donacion> | null;
	afiliadoId: number | null;
}
