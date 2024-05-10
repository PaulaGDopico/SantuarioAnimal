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
                                </ion-col>
                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Contraseña"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu contraseña"
                                        v-model="password"></ion-input>
                                </ion-col>

                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Nombre"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu nombre"
                                        v-model="nombre"></ion-input>
                                </ion-col>

                                <ion-col size="12" size-sm="6">
                                    <ion-input
                                        label="Teléfono"
                                        label-placement="floating"
                                        fill="solid"
                                        placeholder="Introduce tu teléfono"
                                        v-model="telefono"></ion-input>
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

const email: string = "";
const password: string = "";
const nombre: string = "";
const telefono: string = "";

async function enviarFormulario(
    email: string,
    password: string,
    nombre: string,
    telefono: string
) {
    register(email, password, nombre, telefono);
}
</script>
<style scoped lang="scss"></style>
