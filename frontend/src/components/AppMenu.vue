<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="top">
				<ion-tab-button tab="home" href="/home">
					<ion-label>Home</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="adopta" href="/adopta">
					<ion-label>Adopta</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonTabs,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonIcon,
} from "@ionic/vue";
</script>
