<template>
	<ion-accordion-group>
		<ion-accordion value="first">
			<ion-item slot="header">
				<ion-icon
					:name="thumbsUpOutline"
					:icon="thumbsUpOutline"></ion-icon>
				<ion-label class="ion-text-center">Voluntariado</ion-label>
			</ion-item>
			<div class="ion-padding" slot="content">
				<ion-item router-link="/voluntariado">
					<ion-icon
						slot="start"
						:name="handLeftOutline"
						:icon="handLeftOutline" />
					<ion-label>Hazte Voluntario</ion-label>
				</ion-item>
				<ion-item router-link="/donaciones">
					<ion-icon
						slot="start"
						:name="heartCircleOutline"
						:icon="heartCircleOutline" />
					<ion-label>Donaciones</ion-label>
				</ion-item>
			</div>
		</ion-accordion>
	</ion-accordion-group>
</template>

<script setup lang="ts">
import {
	IonIcon,
	IonLabel,
	IonAccordion,
	IonAccordionGroup,
	IonItem,
} from "@ionic/vue";
import {
	handLeftOutline,
	heartCircleOutline,
	thumbsUpOutline,
} from "ionicons/icons";
</script>

<style scoped>
/* Add custom styles as needed */
</style>
