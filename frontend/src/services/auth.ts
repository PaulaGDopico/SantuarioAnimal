import router from '@/router';
import { ref } from 'vue';
import { pageURL } from '@/middleware/secrets';
export interface LoginData{
    name: string,
    password:string,
}
export async function Login(requestData:LoginData) {
    const errorForm = ref();
    try {
		const response = await fetch(pageURL, {
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
			const token: string = data.accessToken; // Suponiendo que tu API devuelve un token JWT
			console.log(token);
			// Almacenar la token en el almacenamiento local (localStorage)
			localStorage.setItem("token", token);
			console.log("Se ha iniciado sesion correctamente");
			// Redirigir al usuario a una página protegida o realizar otras acciones
			router.push({ name: "home" });
		} else {
			const dataErr = await response.json();
			errorForm.value = dataErr.error;
		}
	} catch (error) {
		errorForm.value = "Error de red: " + error;
	}
}