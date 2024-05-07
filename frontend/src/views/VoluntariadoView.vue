<template>
	<ion-page>
		<ion-content>
			<section class="subheader">
				<div>
					<h1>Buscamos personas comprometidas</h1>
				</div>
			</section>
			<section class="container ion-padding">
				<ion-grid>
					<ion-row>
						<ion-col>
							<h2>Voluntariado</h2>
							<p>
								Necesitamos personas con ganas de ayudar a los
								animales, ya sea paseando perros, acariciando
								gatos, limpiando las instalaciones, haciendo
								lavadoras, repartiendo comida, etc. Los
								voluntarios son parte esencial para el
								funcionamiento del refugio y requieren de un
								compromiso a largo plazo con los animales. Si
								quieres ser voluntario de la Liga y reúnes los
								requisitos necesarios, haz clic en el formulario
								que verás al final de esta página y rellenalo.
							</p>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<h3>Requisitos</h3>
						</ion-col>
						<ion-col>
							<section>
								<ion-icon
									:name="checkmark"
									:icon="checkmark"></ion-icon>
								<ion-label
									>Ser puntual en el turno escogido</ion-label
								>
							</section>
							<section>
								<ion-icon
									:name="checkmark"
									:icon="checkmark"></ion-icon>
								<ion-label>Ser mayor de edad</ion-label>
							</section>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<h3>Turnos</h3>
						</ion-col>
						<ion-col>
							<h4>Los turnos de voluntariado són:</h4>
							<section>
								<h5>Modalidad de gatos</h5>
								<p>De lunes a domingo, de 9:30 a 13:30 h</p>
							</section>
							<section>
								<h5>Modalidad de perros pequeños:</h5>
								<p>
									Sábados y domingos, de 8 a 12h o de 13:30 a
									16h
								</p>
							</section>
							<section>
								<h5>Modalidad de gatos</h5>
								<p>
									De lunes a viernes, de 8 a 12h o de 14:30h a
									18h Sábados y domingos, de 8 a 12h o de 13 a
									16h
								</p>
							</section>
							<p>
								En esta página informaremos periódicamente de
								las necesidades que vayan surgiendo para cubrir
								los turnos de voluntariado de perros y gatos.
								Los turnos que no aparecen como opción en el
								formulario están cerrados actualmente.
							</p>
						</ion-col>
					</ion-row>
				</ion-grid>
			</section>
			<section class="container orange ion-padding">
				<form action="" @submit.prevent="enviarFormulario">
					<ion-grid>
						<ion-row>
							<ion-col>
								<h2>Formulario de voluntariado</h2>
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col size="12" size-sm="6"
								><ion-input
									label="Nombre"
									label-placement="floating"
									fill="solid"
									class="orange-input"
									placeholder="Introduce tu nombre"
									v-model="nombre"></ion-input
							></ion-col>
							<ion-col size="12" size-sm="6"
								><ion-input
									label="Apellidos"
									label-placement="floating"
									fill="solid"
									class="orange-input"
									placeholder="Introduce tus apellidos"
									v-model="apellidos"></ion-input
							></ion-col>
						</ion-row>
						<ion-row>
							<ion-col size="12" size-sm="6"
								><ion-input
									label="Teléfono"
									label-placement="floating"
									fill="solid"
									class="orange-input"
									placeholder="Introduce tu teléfono"
									v-model="telefono"></ion-input
							></ion-col>
							<ion-col size="12" size-sm="6"
								><ion-input
									label="Correo"
									label-placement="floating"
									fill="solid"
									class="orange-input"
									placeholder="Introduce tu correo"
									v-model="correo"></ion-input
							></ion-col>
							<ion-col size="12" size-sm="6"
								><ion-input
									label="Fecha de nacimiento"
									label-placement="floating"
									fill="solid"
									class="orange-input"
									placeholder="Introduce tu fecha de nacimiento"
									type="date"
									v-model="fecha_nacimiento"></ion-input
							></ion-col>
						</ion-row>
						<ion-row>
							<ion-col size="12">
								<ion-checkbox
									labelPlacement="end"
									v-model="mayorDe18"
									>Declaro que soy mayor de 18
									años</ion-checkbox
								>
							</ion-col>
							<ion-col size="12">
								<ion-checkbox
									labelPlacement="end"
									v-model="politicaAceptada">
									<span class="ion-text-wrap"
										>He leído y acepto la política de
										privacidad. La finalidad de la recogida
										de datos es la de poder atender sus
										cuestiones, sin ceder sus datos a
										terceros. Tiene derecho a saber qué
										información tenemos sobre vosotros,
										corregirla o eliminarla tal y como se
										explica en nuestra política de
										privacidad. *</span
									>
								</ion-checkbox>
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col>
								<ion-button type="submit"
									>Solicitar unirse</ion-button
								>
							</ion-col>
						</ion-row>
					</ion-grid>
				</form>
			</section>
			<app-footer></app-footer>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import { enviarMail } from "@/services/mail";
import {
	IonPage,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonLabel,
	IonButton,
	IonInput,
	IonCheckbox,
} from "@ionic/vue";
import { checkmark } from "ionicons/icons";
import { ref } from "vue";

const nombre = ref();
const apellidos = ref();
const telefono = ref();
const correo = ref();
const fecha_nacimiento = ref();

const mayorDe18 = ref();
const politicaAceptada = ref();

function enviarFormulario() {
	if (!mayorDe18.value) {
		console.log("El usuario no es mayor de 18");
	}
	if (!politicaAceptada.value) {
		console.log("El usuario no ha aceptado la politica");
	}
	const mensaje = `
	UN USUARIO QUIERE SER VOLUNTARIO: 
	Nombre y apellidos: ${nombre.value} ${apellidos.value} 
	Telefono: ${telefono.value}
	Correo: ${correo.value}
	Fecha de nacimiento: ${fecha_nacimiento.value}
	`;
	//console.log(mensaje);
	enviarMail(
		mensaje,
		"Voluntariado",
		"notificacionessantuarioanimal@gmail.com"
	);
}
</script>

<style lang="scss">
.subheader {
	height: 50vh;
	background-image: url(/img/pexels-umit-ozbek-140134.jpg);
	background-size: cover;
	background-position: center;
	justify-content: start;
	display: flex;
	align-items: center;

	div {
		width: 90%;
		text-align: end;
	}
}
.container {
	margin: 5vh 10vw;
	background-color: var(--ion-card-background);
	border-bottom: 10px solid var(--ion-color-primary);
}
.orange {
	background-color: #e9900cc0;
}
.orange-input {
	--background: #e6621040 !important;
}
</style>
