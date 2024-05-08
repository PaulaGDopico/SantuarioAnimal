<template>
	<ion-page>
		<ion-content>
			<section class="subheader">
				<div>
					<h1>Adoptar es querer</h1>
				</div>
			</section>
			<div>
				<section class="info container">
					<ion-grid>
						<ion-row>
							<ion-col size="12" size-sm="6" class="ion-padding">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47859.71994730065!2d2.061814069747932!3d41.43417660988949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a497f1b497f215%3A0x49d2d6b706b90165!2sCentro%20de%20Acogida%20de%20Animales%20de%20Compa%C3%B1%C3%ADa%20de%20Barcelona!5e0!3m2!1ses!2ses!4v1713364793950!5m2!1ses!2ses"
									style="border: 0"
									class="map"
									allowfullscreen="false"
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</ion-col>
							<ion-col size="12" size-sm="6" class="ion-padding">
								<ion-row>
									<ion-col>
										<h2>Santuario animal</h2>
									</ion-col>
								</ion-row>
								<ion-row>
									<ion-col
										size="12"
										size-sm="6"
										class="contact-info">
										<ion-row
											class="ion-justify-content-center">
											<ion-col size="auto">
												<ion-icon
													:icon="pin"
													:name="pin"></ion-icon>
											</ion-col>
											<ion-col>
												<ion-label
													>Carrer portugal,
													22</ion-label
												>
											</ion-col>
										</ion-row>
										<ion-row
											class="ion-justify-content-center">
											<ion-col size="auto">
												<ion-icon
													:icon="call"
													:name="call"></ion-icon>
											</ion-col>
											<ion-col>
												<ion-label
													>+34 999 888 777</ion-label
												>
											</ion-col>
										</ion-row>
										<ion-row
											class="ion-justify-content-center">
											<ion-col size="auto">
												<ion-icon
													:icon="mail"
													:name="mail"></ion-icon>
											</ion-col>
											<ion-col>
												<ion-label
													>info@santuarioAnimal.cat</ion-label
												>
											</ion-col>
										</ion-row>
									</ion-col>
									<ion-col class="horario-adoptar">
										<ion-row>
											<ion-col
												size="auto"
												class="ion-text-center">
												<ion-icon
													:icon="calendar"
													:name="calendar"></ion-icon>
											</ion-col>
											<ion-col>
												<ion-label>
													Horario para adoptar
												</ion-label>
											</ion-col>
										</ion-row>
										<ion-row>
											<ion-col>
												<section class="">
													<b>Lunes - Viernes</b>
													<p>Gatos: 10 a 15:30h</p>
													<p>
														Perros: 9 a 12h y de
														14:30 a 17:30h
													</p>
												</section>
												<section class="">
													<b
														>Sábados, Domingos y
														festivos</b
													>
													<p>
														8 a 12h y de 13:30 a
														15:30h
													</p>
												</section>
											</ion-col>
										</ion-row>
									</ion-col>
								</ion-row>
								<ion-row>
									<ion-col>
										<p>
											Estamos al final de la Av. Tibidabo,
											a pocos metros de la estación del
											Funicular del Tibidabo.
										</p>
										<p>
											Podéis llegar hasta la Av. Tibidabo
											con los trenes FGC, línea L7 (con
											origen en Plaza Catalunya) y después
											tomar el autobús 196 apeándoos
											delante de la estación del funicular
											(Plaza Dr. Andreu).
										</p>
									</ion-col>
								</ion-row>
							</ion-col>
						</ion-row>
					</ion-grid>
				</section>
				<section class="contact-form container ion-padding">
					<form action="">
						<ion-grid>
							<ion-row>
								<ion-col>
									<h2>Información de contacto</h2>
								</ion-col>
							</ion-row>
							<ion-row>
								<ion-col size="12" size-sm="6"
									><ion-input
										label="Nombre"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce tu nombre"></ion-input
								></ion-col>
								<ion-col size="12" size-sm="6"
									><ion-input
										label="Apellidos"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce tus apellidos"></ion-input
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col size="12" size-sm="6"
									><ion-input
										label="Teléfono"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce tu teléfono"></ion-input
								></ion-col>
								<ion-col size="12" size-sm="6"
									><ion-input
										label="Correo"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce tu correo"></ion-input
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col><h2>Asunto</h2></ion-col>
							</ion-row>
							<ion-row>
								<ion-col
									><ion-input
										label="Título"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce el título"></ion-input
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<ion-textarea
										label="Mensaje"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce el mensaje"></ion-textarea
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<input
										type="file"
										name="images"
										id="images" />
								</ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<ion-button type="submit">
										Enviar mensaje
									</ion-button>
								</ion-col>
							</ion-row>
						</ion-grid>
					</form>
				</section>
			</div>
			<app-footer></app-footer>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import {
	IonPage,
	IonContent,
	IonGrid,
	IonCol,
	IonRow,
	IonIcon,
	IonLabel,
	IonButton,
	IonInput,
	IonTextarea,
} from "@ionic/vue";
import { calendar, call, mail, pin } from "ionicons/icons";
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
	margin: 5vh 10vw;
	background-color: var(--ion-card-background);
	border-bottom: 10px solid var(--ion-color-primary);
	.map {
		width: 100%;
		height: 100%;
	}
}

.info {
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
	}
	h2 {
		color: var(--ion-color-primary);
	}
	h3 {
		padding: 10px 0px;
	}
}
</style>
