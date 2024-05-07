<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button color="medium" @click="cancel">Cancelar</ion-button>
            </ion-buttons>
            <ion-title>Adopta</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="confirm" :strong="true"
                    >Confirmar</ion-button
                >
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item>
            <ion-input
                label="Nombre"
                label-placement="stacked"
                v-model="name"
                error-text="Nombre requerido"
                placeholder="Tu nombre"></ion-input>
        </ion-item>
        <p>{{ nameError }}</p>
        <ion-item>
            <ion-input
                label="Teléfono"
                label-placement="stacked"
                v-model="phone"
                error-text="Teléfono requerido"
                placeholder="Tu teléfono"></ion-input>
        </ion-item>
        <p>{{ phoneError }}</p>
        <ion-item>
            <ion-input
                label="Dirección"
                label-placement="stacked"
                v-model="address"
                error-text="Dirección requerida"
                placeholder="Tu dirección"></ion-input>
        </ion-item>
        <p>{{ addressError }}</p>
        <ion-item>
            <ion-input
                label="Código Postal"
                label-placement="stacked"
                v-model="postalCode"
                error-text="Código postal requerido"
                placeholder="Tu código postal"></ion-input>
        </ion-item>
        <p>{{ postalCodeError }}</p>
        <ion-item>
            <ion-input
                label="País"
                label-placement="stacked"
                v-model="country"
                error-text="País requerido"
                placeholder="Tu país"></ion-input>
        </ion-item>
        <p>{{ countryError }}</p>
        <ion-item>
            <ion-input
                label="Edad"
                label-placement="stacked"
                v-model="age"
                error-text="Edad requerida"
                placeholder="Tu edad"></ion-input>
        </ion-item>
        <p>{{ ageError }}</p>
        <ion-item>
            <ion-input
                label="Ocupación"
                label-placement="stacked"
                v-model="occupation"
                error-text="Ocupación requerida"
                placeholder="Tu ocupación"></ion-input>
        </ion-item>
        <p>{{ occupationError }}</p>
        <ion-item>
            <ion-textarea
                label="Experiencia"
                label-placement="stacked"
                v-model="experience"
                error-text="Experiencia requerida"
                placeholder="Tu experiencia con mascotas"></ion-textarea>
        </ion-item>
        <p>{{ experienceError }}</p>
        <ion-item>
            <ion-textarea
                label="Motivo"
                label-placement="stacked"
                v-model="adoptionReason"
                error-text="Motivo de adopción requerido"
                placeholder="Tu motivo para adoptar"></ion-textarea>
        </ion-item>
        <p>{{ adoptionReasonError }}</p>
    </ion-content>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonItem,
    IonInput,
    IonTextarea,
    modalController,
} from "@ionic/vue";
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const address = ref("");
const postalCode = ref("");
const country = ref("");
const age = ref("");
const occupation = ref("");
const experience = ref("");
const adoptionReason = ref("");
const message = ref("");

const nameError = ref("");
const phoneError = ref("");
const addressError = ref("");
const postalCodeError = ref("");
const countryError = ref("");
const ageError = ref("");
const occupationError = ref("");
const experienceError = ref("");
const adoptionReasonError = ref("");

function validateForm() {
    // Validar el nombre
    nameError.value = name.value.trim() === "" ? "Nombre requerido" : "";

    // Validar el teléfono
    const phonePattern = /^\d{9}$/; // Expresión regular para un número de teléfono de 9 dígitos
    phoneError.value =
        phone.value.trim() === ""
            ? "Teléfono requerido"
            : !phonePattern.test(phone.value)
            ? "Teléfono inválido"
            : "";

    // Validar la dirección
    addressError.value =
        address.value.trim() === "" ? "Dirección requerida" : "";

    // Validar el código postal
    const postalCodePattern = /^\d{5}$/; // Expresión regular para un código postal de 5 dígitos
    postalCodeError.value =
        postalCode.value.trim() === ""
            ? "Código postal requerido"
            : !postalCodePattern.test(postalCode.value)
            ? "Código postal inválido"
            : "";

    // Validar el país
    countryError.value = country.value.trim() === "" ? "País requerido" : "";

    // Validar la edad
    ageError.value =
        age.value.trim() === ""
            ? "Edad requerida"
            : isNaN(Number(age.value.trim())) ||
              Number(age.value.trim()) < 18 ||
              Number(age.value.trim()) > 100
            ? "Edad inválida"
            : "";

    // Validar la ocupación
    occupationError.value =
        occupation.value.trim() === "" ? "Ocupación requerida" : "";

    // Validar la experiencia
    experienceError.value =
        experience.value.trim() === "" ? "Experiencia requerida" : "";

    // Validar el motivo de adopción
    adoptionReasonError.value =
        adoptionReason.value.trim() === ""
            ? "Motivo de adopción requerido"
            : "";

    return (
        nameError.value === "" &&
        phoneError.value === "" &&
        addressError.value === "" &&
        postalCodeError.value === "" &&
        countryError.value === "" &&
        ageError.value === "" &&
        occupationError.value === "" &&
        experienceError.value === "" &&
        adoptionReasonError.value === ""
    );
}
function buildMessage() {
    message.value = `
    INFORMACIÓN DE INTERESADO EN APADRINAR
    Nombre: ${name.value}
    Teléfono: ${phone.value}
    Dirección: ${address.value}
    Código postal: ${postalCode.value}
    País: ${country.value}
    Edad: ${age.value}
    Ocupación: ${occupation.value}
    Experiencia con animales: ${experience.value}
    Razón para adoptar: ${adoptionReason.value}
  `;
}

const cancel = () => modalController.dismiss(null, "cancel");

const confirm = () => {
    if (validateForm()) {
        buildMessage();
        modalController.dismiss(message.value, "confirm");
    }
};
</script>

<style scoped lang="scss">
/* Styles */
</style>
