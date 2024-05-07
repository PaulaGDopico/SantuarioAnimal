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
			<ion-label position="stacked">Nombre</ion-label>
			<ion-input v-model="name" placeholder="Tu nombre"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Teléfono</ion-label>
			<ion-input v-model="phone" placeholder="Tu teléfono"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Dirección</ion-label>
			<ion-input v-model="address" placeholder="Tu dirección"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Código Postal</ion-label>
			<ion-input
				v-model="postalCode"
				placeholder="Tu código postal"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">País</ion-label>
			<ion-input v-model="country" placeholder="Tu país"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Edad</ion-label>
			<ion-input v-model="age" placeholder="Tu edad"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Ocupación</ion-label>
			<ion-input
				v-model="occupation"
				placeholder="Tu ocupación"></ion-input>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Experiencia con mascotas</ion-label>
			<ion-textarea
				v-model="experience"
				placeholder="Tu experiencia con mascotas"></ion-textarea>
		</ion-item>

		<ion-item>
			<ion-label position="stacked">Motivo de adopción</ion-label>
			<ion-textarea
				v-model="adoptionReason"
				placeholder="Tu motivo para adoptar"></ion-textarea>
		</ion-item>
	</ion-content>
</template>

<script setup lang="ts">
// Script setup
import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonButton,
	IonItem,
	IonLabel,
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

const cancel = () => modalController.dismiss(null, "cancel");
const confirm = () =>
	modalController.dismiss(
		{
			name: name.value,
			phone: phone.value,
			address: address.value,
			postalCode: postalCode.value,
			country: country.value,
			age: age.value,
			occupation: occupation.value,
			experience: experience.value,
			adoptionReason: adoptionReason.value,
		},
		"confirm"
	);
</script>

<style scoped lang="scss">
/* Styles */
</style>
