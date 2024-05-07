<template>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-button color="medium" @click="cancel">Cancelar</ion-button>
			</ion-buttons>
			<ion-title>Apadrina</ion-title>
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
		<ion-item>
			<ion-input
				label="Teléfono"
				label-placement="stacked"
				v-model="phone"
				error-text="Teléfono requerido"
				placeholder="Tu teléfono"></ion-input>
		</ion-item>

		<ion-item>
			<ion-input
				label="Dirección"
				label-placement="stacked"
				v-model="address"
				error-text="Dirección requerida"
				placeholder="Tu dirección"></ion-input>
		</ion-item>

		<ion-item>
			<ion-input
				label="Código Postal"
				label-placement="stacked"
				v-model="postalCode"
				error-text="Código postal requerido"
				placeholder="Tu código postal"></ion-input>
		</ion-item>

		<ion-item>
			<ion-input
				label="País"
				label-placement="stacked"
				v-model="country"
				error-text="País requerido"
				placeholder="Tu país"></ion-input>
		</ion-item>

		<ion-item>
			<ion-input
				label="Edad"
				label-placement="stacked"
				v-model="age"
				error-text="Edad requerida"
				placeholder="Tu edad"></ion-input>
		</ion-item>

		<ion-item>
			<ion-input
				label="Ocupación"
				label-placement="stacked"
				v-model="occupation"
				error-text="Ocupación requerida"
				placeholder="Tu ocupación"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Experiencia con mascotas</ion-label>
			<ion-textarea
				label="Experiencia"
				label-placement="stacked"
				v-model="experience"
				error-text="Experiencia requerida"
				placeholder="Tu experiencia con mascotas"></ion-textarea>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Motivo de adopción</ion-label>
			<ion-textarea
				label="Motivo"
				label-placement="stacked"
				v-model="adoptionReason"
				error-text="Motivo de adopción requerido"
				placeholder="Tu motivo para adoptar"></ion-textarea>
		</ion-item>
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
	buildMessage();
	modalController.dismiss(message.value, "confirm");
};
</script>

<style scoped lang="scss">
/* Styles */
</style>
