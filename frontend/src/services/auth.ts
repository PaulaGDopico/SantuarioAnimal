import router from "@/router";
import {Ref, ref} from "vue";
import {API_URL} from "@/middleware/secrets";
import {AdministradorRegistro} from "@/types/AdministradorRegistro";

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
            sessionStorage.setItem("token", token);
            console.log("Se ha iniciado sesion correctamente");
            // Redirigir al usuario a una página protegida o realizar otras acciones
            await router.push({name: "gestion"});
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

export async function register(
    email: string,
    password: string,
    nombre: string,
    telefono: string
) {
    const newAdministrador: AdministradorRegistro = {
        email,
        password,
        nombre,
        telefono,
    };
    try {
        const response = await fetch(API_URL + "/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newAdministrador),
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export async function logout(): Promise<void> {
    try {
        sessionStorage.removeItem("token");
        console.log("Sesión cerrada exisosamente");

        await router.push({name: "InicioSesion"});
    } catch (error) {
        console.error("Error cerrando sesión:", error);
    }
}

export interface Notification {
    emails: Array<string>;
    issue: string;
    description: string;
}
