//import router from "@/router";
import { API_URL } from "@/middleware/secrets";
import { Animal } from "@/types/Animal";
import {
	EstadoAdopcionAnimal,
	estadoAdopcionLabels,
} from "@/types/AnimalEstadoAdopcion";
const options = {
	headers: new Headers({
		"ngrok-skip-browser-warning": "true",
	}),
};
export const getAnimal = async (animalId: string) => {
	try {
		console.log(API_URL + "/animales/animal/" + animalId);
		const response = await fetch(
			API_URL + "/animales/animal/" + animalId,
			options
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

export const getAnimales = async (numeroPagina: number) => {
	try {
		const response = await fetch(
			API_URL + "/animales/" + numeroPagina,
			options
		);
		const animales: Array<Animal> = await response.json();
		return animales;
	} catch (error) {
		console.log(error);
	}
};
