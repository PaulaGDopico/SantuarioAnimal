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
			<ion-label position="stacked">Ingrese su nombre</ion-label>
			<ion-input v-model="name" placeholder="Su nombre"></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked"
				>Ingrese su correo electrónico</ion-label
			>
			<ion-input
				v-model="email"
				type="email"
				placeholder="Su correo electrónico"></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Seleccione su género</ion-label>
			<ion-select v-model="gender" placeholder="Género">
				<ion-select-option value="masculino"
					>Masculino</ion-select-option
				>
				<ion-select-option value="femenino">Femenino</ion-select-option>
				<ion-select-option value="otro">Otro</ion-select-option>
			</ion-select>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Seleccione su ciudad</ion-label>
			<ion-select v-model="city" placeholder="Ciudad">
				<ion-select-option value="madrid">Madrid</ion-select-option>
				<ion-select-option value="barcelona"
					>Barcelona</ion-select-option
				>
				<ion-select-option value="valencia">Valencia</ion-select-option>
			</ion-select>
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
	IonInput,
	IonLabel,
	IonSelect,
	IonSelectOption,
	modalController,
} from "@ionic/vue";
import { ref } from "vue";
const name = ref<string>("");
const email = ref<string>("");
const gender = ref<string>("");
const city = ref<string>("");

const cancel = () => modalController.dismiss(null, "cancel");
const confirm = () => {
	const formData = {
		name: name.value,
		email: email.value,
		gender: gender.value,
		city: city.value,
	};
	modalController.dismiss(formData, "confirm");
};
</script>

<style scoped lang="scss">
/* Styles */
</style>
