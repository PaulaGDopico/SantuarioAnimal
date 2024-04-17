<template>
	<ion-tab-button tab="voluntariado" @click="toggleMenu">
		<ion-icon :icon="thumbsUpOutline" />
		<ion-label>Voluntariado</ion-label>
	</ion-tab-button>

	<ion-list v-if="isMenuVisible">
		<ion-item>
			<ion-label>Option 1</ion-label>
		</ion-item>
		<ion-item>
			<ion-label>Option 2</ion-label>
		</ion-item>
		<!-- Add more options as needed -->
	</ion-list>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonTabButton, IonIcon, IonLabel, IonList, IonItem } from "@ionic/vue";
import { thumbsUpOutline } from "ionicons/icons";

const isMenuVisible = ref(false);

const toggleMenu = () => {
	isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
/* Add custom styles as needed */
</style>
