import { Habitacion } from "@/types/Habitacion";
import { API_URL } from "@/middleware/secrets";

export const getHabitaciones = async () => {
	try {
		const response = await fetch(
			API_URL + "/habitaciones",
		);
		const habitaciones: Array<Habitacion> = await response.json();
		console.log(response)
		return habitaciones;
	} catch (error) {
		console.log(error);
	}
};