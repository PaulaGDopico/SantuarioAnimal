//import router from "@/router";
import { API_URL } from "@/middleware/secrets";
import { Animal } from "@/types/Animal";

import {
    EstadoAdopcionAnimal,
    estadoAdopcionLabels,
} from "@/types/AnimalEstadoAdopcion";
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

export const getAnimales = async (numeroPagina: number) => {
    try {
        const response = await fetch(
            API_URL + "/animales/" + numeroPagina,
        );
        const animales: Array<Animal> = await response.json();
        console.log(animales);
        return animales;
    } catch (error) {
        console.log(error);
    }
};

export const getAllAnimalsWithoutPagination = async () => {
    try {
        const response = await fetch("http://localhost:3000/animales");
        const animales: Array<Animal> = await response.json();
        return animales;
    } catch (error) {
        console.log(error);
    }
};

export const pushAnimal = async (animalData:Animal) => {
	try{
		const formData = new FormData
		
		formData.append('createdAt', animalData.createdAt);
		formData.append('updatedAt', animalData.updatedAt);
		formData.append('nombre', animalData.nombre);
		formData.append('tipo', animalData.tipo);
		formData.append('estado_adopcion', animalData.estado_adopcion);
		formData.append('peso', animalData.peso);
		formData.append('tamanyo', animalData.tamanyo);
		formData.append('raza', animalData.raza);
		formData.append('fecha_nacimiento', animalData.fecha_nacimiento);
		formData.append('fecha_ingreso', animalData.fecha_ingreso);
		formData.append('sexo', animalData.sexo);
		formData.append('image', animalData.img);
		formData.append('descripcion', animalData.descripcion ?? '');
		formData.append('habitacionId', animalData.habitacionId.toString());
		if (animalData.donaciones_recibidas) {
			formData.append('donaciones_recibidas', JSON.stringify(animalData.donaciones_recibidas));
		} else {
			formData.append('donaciones_recibidas', '');
		}
		formData.append('afiliadoId', animalData.afiliadoId !== null ? animalData.afiliadoId.toString() : '');

		const response = await fetch(
			'http://localhost:3000/animales',
			{
				method: 'POST',
				body: formData
			}
		)
		if (response.ok) {
            const data = await response.json();
            // Manejar la respuesta exitosa, como mostrar un mensaje de éxito o redirigir a una página de inicio de sesión
            console.info('Subida exitoso:', data);
            //location.reload()
		}
		if (!response.ok) {
            throw new Error('Error al intentar subir el animal.');
        }
		return true
	}catch(error){
		console.error('Error al subir el animal:', error);
        return false;
	}
}


export const deleteAnimal = async (id:number) =>{
	try{
		const response = await fetch(
			`http://localhost:3000/animales/${id}`,
			{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
		)
		if (!response.ok) {
            throw new Error('Error al intentar eliminar el animal.');

export const deleteAnimal = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/animales/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al intentar eliminar el animal.");

        }
        return true;
    } catch (error) {
        console.error("Error al eliminar el animal:", error);
        return false;
    }
};
