<template>
	<ion-page>
		<ion-content>
			<section class="subheader">
				<div>
					<h1>Un donativo para una buena causa</h1>
				</div>
			</section>
			<section class="donativos container">
				<h2>Donativos</h2>
				<p>
					Puedes ayudarnos realizando una aportación económica, ya que
					con ello ayudarás, y mucho, a que podamos continuar con
					nuestra labor y con el mantenimiento de nuestro refugio.
				</p>
				<ion-accordion-group>
					<ion-accordion value="first">
						<ion-item slot="header">
							<ion-label>Marco Legal</ion-label>
						</ion-item>
						<div class="ion-padding" slot="content">
							First Content
						</div>
					</ion-accordion>
					<ion-accordion value="second">
						<ion-item slot="header">
							<ion-label>Condiciones</ion-label>
						</ion-item>
						<div class="ion-padding" slot="content">
							Second Content
						</div>
					</ion-accordion>
					<ion-accordion value="third">
						<ion-item slot="header">
							<ion-label>Tipos de donaciones</ion-label>
						</ion-item>
						<div class="ion-padding" slot="content">
							Third Content
						</div>
					</ion-accordion>
				</ion-accordion-group>
				<div class="divider">
					<h3>Maneras de ayudarnos mutuamente</h3>
				</div>
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-img src="/img/perro.jpg"></ion-img>
							<h2>Donaciones puntuales</h2>
							<p>
								Con tu aportación puedes contribuir al
								mantenimiento del refugio y que podamos seguir
								acogiendo y cuidando a animales en situación de
								abandono.
							</p>
							<ion-accordion-group>
								<ion-accordion value="aaaa">
									<ion-item slot="header" color="primary">
										<ion-label>Más información</ion-label>
									</ion-item>
									<div class="ion-padding" slot="content">
										<section>
											<ion-icon
												:name="logoPaypal"
												:icon="logoPaypal"></ion-icon>
											<h4>Donación mediante paypal</h4>
											<p>
												Para dar cualquier cantidad de
												una forma sencilla y segura a
												través de Paypal
											</p>
											<ion-button>Ayúdanos</ion-button>
										</section>
										<section>
											<ion-icon
												:name="card"
												:icon="card"></ion-icon>
											<h4>
												Donación mediante transferéncia
												bancaria
											</h4>
											<p>ESXX XXXX XXXX XXXX XXXX XXXX</p>
										</section>
										<section>
											<ion-icon
												:name="logoEuro"
												:icon="logoEuro"></ion-icon>
											<h4>Donación mediante bizum</h4>
											<p>Identificador: XXXXX</p>
										</section>
									</div>
								</ion-accordion>
							</ion-accordion-group>
						</ion-col>
						<ion-col>
							<ion-img src="/img/gato.jpg"></ion-img>
							<h2>Solicita ayuda y salva vidas</h2>
							<p>
								Si necesitas recursos económicos para la
								intervención quirúrjica de tu animal de
								compañia, no dudes en pedir ayuda a nuestra
								protectora. También puedes hacer un donativo
								solidario a los animales que lo necesiten.
							</p>
							<ion-accordion-group>
								<ion-accordion value="bbbb">
									<ion-item slot="header" color="primary">
										<ion-label>Más información</ion-label>
									</ion-item>
									<div class="ion-padding" slot="content">
										<section>
											<ion-icon
												:name="people"
												:icon="people"></ion-icon>
											<h4>Haz una donación solidaria</h4>
											<p>
												Ayuda economicamente para
												alcanzar el importe de la
												operación de uno de nuestros
												animales
											</p>
										</section>
										<section>
											<ion-icon
												:name="helpBuoy"
												:icon="helpBuoy"></ion-icon>
											<h4>Solicita ayuda</h4>
											<p>
												Ayuda economicamente para
												alcanzar el importe de la
												operación de uno de nuestros
												animales
											</p>
										</section>
									</div>
								</ion-accordion>
							</ion-accordion-group>
						</ion-col>
					</ion-row>
				</ion-grid>
			</section>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonContent,
	IonAccordionGroup,
	IonAccordion,
	IonItem,
	IonLabel,
	IonGrid,
	IonRow,
	IonCol,
	IonImg,
	IonIcon,
	IonButton,
} from "@ionic/vue";
import { card, helpBuoy, logoEuro, logoPaypal, people } from "ionicons/icons";
</script>

<style lang="scss">
.subheader {
	height: 50vh;
	background-image: url(/img/pexels-snapwire-46024.jpg);
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
}

.divider {
	display: flex;
	align-items: center;
}

.divider::before,
.divider::after {
	flex: 1;
	content: "";
	padding: 3px;
	background-color: var(--ion-color-primary);
	margin: 5px;
}

ion-img {
	width: 100%;
	height: 300px;
	object-fit: cover;
}
</style>
