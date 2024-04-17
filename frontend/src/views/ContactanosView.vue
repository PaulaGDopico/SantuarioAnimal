<template>
	<ion-page>
		<ion-content>
			<section class="subheader">
				<div>
					<h1>Adoptar es querer</h1>
				</div>
			</section>
			<div class="container">
				<section class="info">
					<ion-grid>
						<ion-row>
							<ion-col>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47859.71994730065!2d2.061814069747932!3d41.43417660988949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a497f1b497f215%3A0x49d2d6b706b90165!2sCentro%20de%20Acogida%20de%20Animales%20de%20Compa%C3%B1%C3%ADa%20de%20Barcelona!5e0!3m2!1ses!2ses!4v1713364793950!5m2!1ses!2ses"
									width="600"
									height="450"
									style="border: 0"
									allowfullscreen="false"
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</ion-col>
							<ion-col>
								<ion-row>
									<ion-col>1</ion-col>
									<ion-col>1</ion-col>
									<ion-col>1</ion-col>
								</ion-row>
								<ion-row>
									<ion-col>1</ion-col>
									<ion-col>1</ion-col>
								</ion-row>
							</ion-col>
						</ion-row>
					</ion-grid>
				</section>
				<section class="contact-form"></section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonCol, IonRow } from "@ionic/vue";
</script>

<style lang="scss" scoped>
.subheader {
	height: 50vh;
	background-image: url(/img/pexels-pixabay-460985.jpg);
	background-size: cover;
	background-position: center;
	justify-content: start;
	display: flex;
	align-items: center;

	div {
		width: 500px;
		margin-left: 160px;
	}
}

.container {
	margin: 10px 200px;
	background-color: var(--ion-card-background);
}
</style>
