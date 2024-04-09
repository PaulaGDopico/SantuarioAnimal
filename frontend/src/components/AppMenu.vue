<template>
	<ion-page>
		<ion-tabs class="desktop-menu">
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
		<div class="mobile-menu">
			<ion-menu content-id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-title>Escoge la opcion</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content class="ion-padding">
					<ion-button router-link="/">Home</ion-button>
					<ion-button router-link="/adopta">Adopta</ion-button>
				</ion-content>
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
				<ion-content class="ion-padding">
					<ion-router-outlet></ion-router-outlet>
				</ion-content>
			</ion-page>
		</div>
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
	IonMenu,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
	IonButton,
} from "@ionic/vue";
</script>

<style lang="scss">
@media (max-width: 768px) {
	.desktop-menu {
		display: none;
	}
	.mobile-menu {
		display: block;
	}
}
@media (min-width: 768px) {
	.desktop-menu {
		display: block;
	}
	.mobile-menu {
		display: none;
	}
}
</style>
