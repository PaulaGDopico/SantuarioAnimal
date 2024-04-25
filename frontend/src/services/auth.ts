import router from "@/router";
import { ref } from "vue";
import { API_URL } from "@/middleware/secrets";
export interface LoginData {
	email: string;
	password: string;
}
export async function Login(requestData: LoginData) {
	const errorForm = ref();
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(requestData),
		});
		console.log(requestData);
		if (response.ok) {
			const data = await response.json();
			const token: string = data.token; // Suponiendo que tu API devuelve un token JWT
			console.log(token);
			// Almacenar la token en el almacenamiento local (localStorage)
			localStorage.setItem("token", token);
			console.log("Se ha iniciado sesion correctamente");
			// Redirigir al usuario a una página protegida o realizar otras acciones
			router.push({ name: "Home" });
		} else {
			const dataErr = await response.json();
			errorForm.value = dataErr.error;
		}
	} catch (error) {
		errorForm.value = "Error de red: " + error;
	}
}

export async function logout(): Promise<void> {
	try {
		localStorage.removeItem("token");
		console.log("Sesión cerrada exisosamente");

		router.push({ name: "InicioSesion" });
	} catch (error) {
		console.error("Error cerrando sesión:", error);
	}
}
