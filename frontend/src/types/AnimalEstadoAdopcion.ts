export enum EstadoAdopcionAnimal {
	ADOPCION_URGENTE = "ADOPCION_URGENTE",
	CASOS_ESPECIALES = "CASOS_ESPECIALES",
	APADRINANDO = "APADRINANDO",
	SIN_ESTADO = "SIN_ESTADO",
}

export const estadoAdopcionLabels: Record<EstadoAdopcionAnimal, string> = {
	ADOPCION_URGENTE: "Adopción Urgente",
	CASOS_ESPECIALES: "Casos Especiales",
	APADRINANDO: "Apadrinando",
	SIN_ESTADO: "Sin Estado",
};
