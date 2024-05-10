<template>
    <ion-page>
        <ion-content>
            <section class="formularioAdministrador">
                <section class="container ion-padding">
                    <form action="" @submit.prevent="enviarFormulario">
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
                                        >Registrar nuevo
                                        administrador</ion-button
                                    >
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                        <ion-toast
                            position="bottom"
                            :is-open="notificacionEnvioIsOpen"
                            :message="errors.envio.value"
                            :duration="5000"
                            @didDismiss="
                                abrirNotificacionEnvio(false)
                            "></ion-toast>
                    </form>
                </section>
            </section>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
const notificacionEnvioIsOpen = ref(false);
const abrirNotificacionEnvio = (state: boolean) => {
    notificacionEnvioIsOpen.value = state;
};
import { register } from "@/services/auth";
import {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonToast,
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
    envio: ref(""),
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

async function enviarFormulario() {
    if (!validarFormulario()) {
        errors.envio.value = "No se ha podido crear el administrador";
        abrirNotificacionEnvio(true);
        return;
    }

    register(email.value, password.value, nombre.value, telefono.value);
    errors.envio.value = "Administrador creado";
    abrirNotificacionEnvio(true);
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
        : "Teléfono inválido";
});
</script>
<style scoped lang="scss">
.container {
    margin: 5vh 10vw;
}
</style>
