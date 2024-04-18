<template>
	<ion-footer>
		<section class="redes-sociales">
			<ion-row class="ion-justify-content-center">
				<a href="#"><ion-icon :name="logoTwitter" :icon="logoTwitter"></ion-icon></a>
				<a href="#"><ion-icon :name="logoYoutube" :icon="logoYoutube"></ion-icon></a>
				<a href="#"><ion-icon :name="logoFacebook" :icon="logoFacebook"></ion-icon></a>
				<a href="#"><ion-icon :name="logoInstagram" :icon="logoInstagram"></ion-icon></a>
			</ion-row>
		</section>
		<section class="info-protectora">
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-icon :name="location" :icon="location"></ion-icon>
				<p>c/ Guarda Antón, 10 08035 Barcelona España</p>
			</ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-icon :name="call" :icon="call"></ion-icon>
				<p>Tel. (+34) 999 666 333</p>
			</ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-icon :name="mail" :icon="mail"></ion-icon>
				<p>info@santuarioAnimal.es</p>
			</ion-row>
		</section>
		<section class="copy-right">
			<article>
				<p class="ion-text-center ion-no-margin">Copyright @ 2024 Protectora BCN (R) Todos los derechos
					reservados</p>
			</article>
			<ion-row class="ion-justify-content-center">
				<a href="">Aviso legal</a>
				<a href="">Política de cookies</a>
				<a href="">Política de privacidad</a>
			</ion-row>
		</section>
	</ion-footer>
</template>

<script setup lang="ts">
import { logoTwitter, logoYoutube, logoFacebook, logoInstagram, location, call, mail } from "ionicons/icons";
import {
	IonFooter,
	IonIcon,
	IonRow
} from "@ionic/vue";
</script>

<style scoped lang="scss">
p {
	color: white;
}

.redes-sociales {
	background-color: #CF7A45;

	a {
		ion-icon {
			fill: white !important;
			margin: 10px 10px;
			font-size: 30px;
		}
	}
}

.info-protectora {
	background-color: #FF914D;

	ion-icon {
		margin: 0px 10px;
		font-size: 20px;
		fill: white;
	}
}

.copy-right {
	padding: 20px;
	background-color: #5E5E5E;
	p{
		margin: 5px;
	}
	a{
		margin: 5px 10px;
		text-decoration: none;
	}
}
</style>
