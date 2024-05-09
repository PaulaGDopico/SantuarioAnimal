//import router from "@/router";
import { API_URL } from "@/middleware/secrets";
import { Animal } from "@/types/Animal";
import {
	EstadoAdopcionAnimal,
	estadoAdopcionLabels,
} from "@/types/AnimalEstadoAdopcion";
import { Ref } from "vue";
import { Filtros } from "@/types/Filtros";

export const getAnimal = async (animalId: string) => {
	try {
		console.log(API_URL + "/animales/animal/" + animalId);
		const response = await fetch(
			API_URL + "/animales/animal/" + animalId,
		);
		const animal: Animal = await response.json();
		console.log(animal);
		// Formatear fechas
		animal.createdAt = new Date(animal.createdAt).toLocaleDateString();
		animal.updatedAt = new Date(animal.updatedAt).toLocaleDateString();
		animal.fecha_nacimiento = new Date(
			animal.fecha_nacimiento
		).toLocaleDateString();
		animal.fecha_ingreso = new Date(
			animal.fecha_ingreso
		).toLocaleDateString();

		//Formatear estado
		animal.estado_adopcion =
			estadoAdopcionLabels[
				animal.estado_adopcion as EstadoAdopcionAnimal
			];

		return animal;
	} catch (error) {
		console.log(error);
	}
};

export const getAnimales = async (numeroPagina: number,filtros:Filtros) => {
	try {
        // Construir la URL de la solicitud con parámetros de consulta para los filtros
        let url = API_URL + "/animales/" + numeroPagina;
        if (filtros) {
            const queryParams = new URLSearchParams();
            Object.entries(filtros).forEach(([key, value]) => {
                if (typeof value === 'boolean') {
                    queryParams.append(key, value.toString());
                } else if (typeof value === 'string' || typeof value === 'number') {
                    queryParams.append(key, value.toString());
                }
            });
			console.log(queryParams)
            url += `?${queryParams.toString()}`;
        }

        const response = await fetch(url);
        const animales: Array<Animal> = await response.json();
        console.log(response);
        return animales;
	} catch (error) {
		console.log(error);
	}
};
export const getAllAnimales = async () => {
	try {
		const response = await fetch(
			API_URL + "/animales/",
		);
		const animales: Array<Animal> = await response.json();
		console.log(response)
		return animales;
	} catch (error) {
		console.log(error);
	}
};
