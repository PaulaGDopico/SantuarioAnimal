<template>
	<ion-app>
		<ion-menu content-id="main-content">
			<ion-header>
				<ion-toolbar>
					<ion-title>Menu Content</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding"
				>This is the menu content.</ion-content
			>
		</ion-menu>
		<ion-page id="main-content">
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-menu-button></ion-menu-button>
					</ion-buttons>
					<ion-title>Menu</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding"> </ion-content>
		</ion-page>
	</ion-app>
</template>

<script setup lang="ts">
import {
	IonApp,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
	IonRouterOutlet,
	IonSplitPane,
} from "@ionic/vue";
import { ref } from "vue";
import {
	archiveOutline,
	archiveSharp,
	bookmarkOutline,
	bookmarkSharp,
	heartOutline,
	heartSharp,
	mailOutline,
	mailSharp,
	logoAndroid,
	paperPlaneOutline,
	paperPlaneSharp,
	trashOutline,
	trashSharp,
	warningOutline,
	warningSharp,
} from "ionicons/icons";

const selectedIndex = ref(0);
const appPages = [
	{
		title: "Inbox",
		url: "/folder/Inbox",
		iosIcon: mailOutline,
		mdIcon: mailSharp,
	},
];

const path = window.location.pathname.split("folder/")[1];
if (path !== undefined) {
	selectedIndex.value = appPages.findIndex(
		(page) => page.title.toLowerCase() === path.toLowerCase()
	);
}
</script>

<style scoped></style>
