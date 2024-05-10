<template>
    <ion-page>
        <ion-content>
            <section class="formularioAdministrador">
                <section class="container ion-padding">
                    <form
                        action=""
                        @submit.prevent="
                            enviarFormulario(email, password, nombre, telefono)
                        ">
                        <ion-grid>
                            <ion-row>
                                <ion-col>
                                    <h2>Añadir un administrador</h2>
                                </ion-col>
                            </ion-row>
                            <ion-row size="12" size-sm="6">
                                <ion-col>
                                    <ion-input
                                        label="Email"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu email"
                                        v-model="email"></ion-input>
                                    <p>{{ errors.email.value }}</p>
                                </ion-col>
                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Contraseña"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu contraseña"
                                        v-model="password"></ion-input>
                                    <p>{{ errors.password.value }}</p>
                                </ion-col>

                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Nombre"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu nombre"
                                        v-model="nombre"></ion-input>
                                    <p>{{ errors.nombre.value }}</p>
                                </ion-col>

                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Teléfono"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu teléfono"
                                        v-model="telefono"></ion-input>
                                    <p>{{ errors.telefono.value }}</p>
                                </ion-col>
                            </ion-row>

                            <ion-row>
                                <ion-col>
                                    <ion-button type="submit"
                                        >Solicitar unirse</ion-button
                                    >
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </form>
                </section>
            </section>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { register } from "@/services/auth";
import {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
} from "@ionic/vue";
import { ref, watch } from "vue";

const email = ref("");
const password = ref("");
const nombre = ref("");
const telefono = ref("");

const errors = {
    email: ref(""),
    password: ref(""),
    nombre: ref(""),
    telefono: ref(""),
};
function validarTelefono(newTelefono: string) {
    const telefonoRegex = /^\d{9}$/; // Ajusta esta expresión regular según tus requisitos
    return telefonoRegex.test(newTelefono.trim());
}
function validarCorreo(newCorreo: string) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar correo electrónico
    return correoRegex.test(newCorreo.trim());
}

function validarFormulario() {
    errors.email.value = email.value.trim() ? "" : "Email requerido";
    errors.email.value = validarCorreo(email.value) ? "" : "Email inválido";
    errors.password.value = password.value.trim() ? "" : "Contraseña requerida";
    errors.nombre.value = nombre.value.trim() ? "" : "Nombre requerido";
    errors.telefono.value = telefono.value.trim() ? "" : "Teléfono requerido";
    errors.telefono.value = validarTelefono(telefono.value)
        ? ""
        : "Teléfono requerido";

    if (
        errors.email.value ||
        errors.password.value ||
        errors.nombre.value ||
        errors.telefono.value
    ) {
        return false;
    } else {
        return true;
    }
}

async function enviarFormulario(
    email: string,
    password: string,
    nombre: string,
    telefono: string
) {
    if (!validarFormulario) {
        return;
    }
    register(email, password, nombre, telefono);
}

//Watchers para revisar los cambios en cada  campo

watch(email, (newValue) => {
    errors.email.value = validarCorreo(newValue) ? "" : "Correo inválido";
});

watch(password, (newValue) => {
    errors.password.value = newValue.trim() ? "" : "Contraseña requerida";
});

watch(nombre, (newValue) => {
    errors.nombre.value = newValue.trim() ? "" : "Nombre requerido";
});
watch(telefono, (newValue) => {
    errors.telefono.value = validarTelefono(newValue)
        ? ""
        : "Teléfono requerido";
});
</script>
<style scoped lang="scss">
.container {
    margin: 5vh 10vw;
}
</style>
