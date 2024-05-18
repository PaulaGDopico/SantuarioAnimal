<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancelar</ion-button>
      </ion-buttons>
      <ion-title>Adopta</ion-title>
      <ion-buttons slot="end">
        <ion-button :strong="true" @click="confirm"
        >Confirmar
        </ion-button
        >
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input
          v-model="name"
          error-text="Nombre requerido"
          label="Nombre"
          label-placement="stacked"
          placeholder="Tu nombre"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ nameError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="phone"
          error-text="Teléfono requerido"
          label="Teléfono"
          label-placement="stacked"
          placeholder="Tu teléfono"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ phoneError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="address"
          error-text="Dirección requerida"
          label="Dirección"
          label-placement="stacked"
          placeholder="Tu dirección"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ addressError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="postalCode"
          error-text="Código postal requerido"
          label="Código Postal"
          label-placement="stacked"
          placeholder="Tu código postal"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ postalCodeError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="country"
          error-text="País requerido"
          label="País"
          label-placement="stacked"
          placeholder="Tu país"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ countryError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="age"
          error-text="Edad requerida"
          label="Edad"
          label-placement="stacked"
          placeholder="Tu edad"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ ageError }}</ion-text>
    <ion-item>
      <ion-input
          v-model="occupation"
          error-text="Ocupación requerida"
          label="Ocupación"
          label-placement="stacked"
          placeholder="Tu ocupación"></ion-input>
    </ion-item>
    <ion-text color="danger">{{ occupationError }}</ion-text>
    <ion-item>
      <ion-textarea
          v-model="experience"
          error-text="Experiencia requerida"
          label="Experiencia"
          label-placement="stacked"
          placeholder="Tu experiencia con mascotas"></ion-textarea>
    </ion-item>
    <ion-text color="danger">{{ experienceError }}</ion-text>
    <ion-item>
      <ion-textarea
          v-model="adoptionReason"
          error-text="Motivo de adopción requerido"
          label="Motivo"
          label-placement="stacked"
          placeholder="Tu motivo para adoptar"></ion-textarea>
    </ion-item>
    <ion-text color="danger">{{ adoptionReasonError }}</ion-text>
  </ion-content>
</template>

<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import {ref} from "vue";

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
    INFORMACIÓN DE INTERESADO EN ADOPTAR
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

//TODO añadir watchers a los campos
</script>

<style lang="scss" scoped>
/* Styles */
</style>
