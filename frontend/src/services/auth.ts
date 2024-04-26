import router from "@/router";
import { Ref, ref } from "vue";
import { API_URL } from "@/middleware/secrets";
export interface LoginData {
	email: string;
	password: string;
}
export async function Login(
	email: string,
	password: string
): Promise<Array<string> | void> {
	const user: LoginData = {
		email: email,
		password: password,
	};
	const errorForm: Ref<Array<string>> = ref([]);
	try {
		const response = await fetch(API_URL + "/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(user),
		});
		console.log(user);
		if (response.ok) {
			const data = await response.json();
			const token: string = data.token; // Suponiendo que tu API devuelve un token JWT
			console.log(token);
			// Almacenar la token en el almacenamiento local (localStorage)
			localStorage.setItem("token", token);
			console.log("Se ha iniciado sesion correctamente");
			// Redirigir al usuario a una página protegida o realizar otras acciones
			await router.push({ name: "gestion" });
			location.reload();
		} else {
			const dataErr = await response.json();
			errorForm.value = dataErr.errors;
			return errorForm.value;
		}
	} catch (error) {
		errorForm.value.push("Error de red: " + error);
		return errorForm.value;
	}
}

export interface Notification{
	emails: Array<string>,
	issue: string,
	description: string
}

export async function sendNotification(
	notification:Notification
):Promise<Array<string> | void>{

	const errorForm: Ref<Array<string>> = ref([]);

	try{
		const response = await fetch(API_URL+"/notificacion",{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(notification),
		});
		console.log(notification);
		if (response.ok) {
			const data = await response.json();
			console.info('Notificacion exitosa:', data);
		}else{
			const dataErr = await response.json();
			errorForm.value = dataErr.errors;
			return errorForm.value;
		}
	}catch (error) {
		errorForm.value.push("Error de red: " + error);
		return errorForm.value;
	}
}