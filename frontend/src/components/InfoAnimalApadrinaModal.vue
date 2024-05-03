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
				label-placement="stacked"
				label="Enter your name"
				v-model="name"
				placeholder="Your name"></ion-input>
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
	modalController,
} from "@ionic/vue";
import { ref } from "vue";
const name = ref();

const cancel = () => modalController.dismiss(null, "cancel");
const confirm = () => modalController.dismiss(name.value, "confirm");
</script>

<style scoped lang="scss">
/* Styles */
</style>
