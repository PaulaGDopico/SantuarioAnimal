<template>
	<ion-page>
		<ion-content>
			<div class="desktop-menu">
				<ion-tabs>
					<ion-header>
						<div class="header-logo">
							<img
								src="/img/logo.png"
								alt="Logo santuario animal" />
							<h1>Santuario Animal</h1>
						</div>
					</ion-header>
					<ion-tab-bar slot="top" color="primary">
						<ion-tab-button tab="gestion" href="/gestion">
							<ion-icon :name="homeOutline" :icon="homeOutline" />
							<ion-label>Gestión</ion-label>
						</ion-tab-button>

						<ion-tab-button
							tab="gestion-animales"
							href="/gestionAnimales">
							<ion-icon
								:name="heartOutline"
								:icon="heartOutline" />
							<ion-label>Animales</ion-label>
						</ion-tab-button>

						<ion-tab-button
							tab="donaciones"
							href="/gestionDonaciones">
							<ion-icon
								:name="thumbsUpOutline"
								:icon="thumbsUpOutline" />
							<ion-label>Donaciones</ion-label>
						</ion-tab-button>

						<ion-tab-button
							tab="gestion-notificaciones"
							href="/gestionNotificaciones">
							<ion-icon :name="pawOutline" :icon="pawOutline" />
							<ion-label>Notificaciones</ion-label>
						</ion-tab-button>

						<ion-tab-button tab="cerrar-sesion" @click="logout">
							<ion-icon
								:name="closeCircleOutline"
								:icon="closeCircleOutline" />
							<ion-label>Cerrar sesión</ion-label>
						</ion-tab-button>
					</ion-tab-bar>
					<ion-router-outlet></ion-router-outlet>
				</ion-tabs>
			</div>

			<div class="mobile-menu">
				<ion-menu content-id="main-content">
					<ion-header>
						<ion-toolbar>
							<ion-title>¿A que página quieres ir?</ion-title>
						</ion-toolbar>
					</ion-header>
					<ion-content class="ion-padding menu-buttons">
						<ion-item router-link="/gestion">
							<ion-icon
								slot="start"
								:name="homeOutline"
								:icon="homeOutline" />
							<ion-label> Gestión </ion-label>
						</ion-item>
						<ion-item router-link="/gestionAnimales">
							<ion-icon
								slot="start"
								:name="pawOutline"
								:icon="pawOutline" />
							<ion-label> Animales</ion-label>
						</ion-item>

						<ion-item router-link="/gestionDonaciones">
							<ion-icon
								slot="start"
								:name="heartOutline"
								:icon="heartOutline" />
							<ion-label> Donaciones</ion-label>
						</ion-item>
						<ion-item router-link="/gestionNotificaciones">
							<ion-icon
								slot="start"
								:name="heartOutline"
								:icon="heartOutline" />
							<ion-label> Gestión notificaciones</ion-label>
						</ion-item>
						<ion-item @click="logout">
							<ion-icon
								slot="start"
								:name="closeCircleOutline"
								:icon="closeCircleOutline" />
							<ion-label>Cerrar sesión</ion-label>
						</ion-item>
					</ion-content>
				</ion-menu>
				<ion-page id="main-content">
					<ion-header>
						<ion-toolbar>
							<ion-buttons slot="start">
								<ion-menu-button></ion-menu-button>
							</ion-buttons>
							<div class="header-logo">
								<img
									src="/img/logo.png"
									alt="Logo Santuario Animal" />
								<ion-title> Santuario Animal </ion-title>
							</div>
						</ion-toolbar>
					</ion-header>
					<ion-content class="ion-padding">
						<ion-router-outlet></ion-router-outlet>
					</ion-content>
				</ion-page>
			</div>
		</ion-content>
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
	IonIcon,
	IonItem,
} from "@ionic/vue";

import {
	homeOutline,
	heartOutline,
	pawOutline,
	chatbubblesOutline,
	thumbsUpOutline,
	closeCircleOutline,
} from "ionicons/icons";

import { logout } from "@/services/auth";
</script>

<style lang="scss">
.header-logo {
	display: flex;
	justify-content: center;
	img {
		width: 4rem;
		margin: 0.3rem;
	}
}
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
