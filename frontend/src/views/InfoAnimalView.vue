<template>
	<ion-page>
		<ion-content>
			<div class="content main-wrapper">
				<ion-grid class="justify-content-center infoAnimal">
					<ion-row>
						<ion-col
							size="12"
							size-sm="12"
							size-lg="4"
							class="datosTecnicos">
							<img
								:src="'/img/perro.jpg'"
								alt="Foto de perro"
								class="w100" />
							<ion-grid>
								<ion-row>
									<ion-col size="6" size-sm="3" class="key"
										>Animal</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.animal
									}}</ion-col>
									<ion-col size="6" size-sm="3" class="key"
										>Estado</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.estado
									}}</ion-col>
								</ion-row>
								<ion-row>
									<ion-col size="6" size-sm="3" class="key"
										>Sexo</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.sexo
									}}</ion-col>
									<ion-col size="6" size-sm="3" class="key"
										>Raza</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.raza
									}}</ion-col>
								</ion-row>
								<ion-row>
									<ion-col size="6" size-sm="3" class="key"
										>Peso</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.peso
									}}</ion-col>
									<ion-col size="6" size-sm="3" class="key"
										>Altura</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.altura
									}}</ion-col>
								</ion-row>
								<ion-row>
									<ion-col size="6" size-sm="3" class="key"
										>Nacimiento</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.nacimiento
									}}</ion-col>
									<ion-col size="6" size-sm="3" class="key"
										>Entrada</ion-col
									>
									<ion-col size="6" size-sm="3">{{
										animal.entrada
									}}</ion-col>
								</ion-row>
							</ion-grid>
						</ion-col>
						<ion-col
							size="11"
							size-md="12"
							size-lg="7"
							class="w60 adoptaBotones">
							<h1>{{ animal.Nombre }}</h1>
							<p>{{ animal.descripcion }}</p>
							<div class="d-flex justify-content-center">
								<button class="btn btn-primary">
									Adopta a {{ animal.Nombre }}
								</button>
								<button class="btn btn-primary">
									Apadrina a {{ animal.Nombre }}
								</button>
								<RouterLink
									class="btn btn-secondary"
									:to="{ name: 'Voluntariado' }"
									>Hazte Voluntario
								</RouterLink>
							</div>
						</ion-col>
					</ion-row>
				</ion-grid>
				<section class="otrosAnimales">
					<div class="d-flex align-items-center">
						<div class="line"></div>
						<h2>Otros animales de la misma categoria</h2>
						<div class="line"></div>
					</div>

					<IonGrid class="cartasAnimal">
						<ion-row class="justify-content-center">
							<AppCartaAnimal
								v-for="animal in infoAnimal"
								:key="animal.Nombre"
								:id="1"
								:animal="animal.animal"
								:estado-adopcion="animal.estado"
								:nombre="animal.Nombre"
								:raza="animal.raza"
								:urlImg="animal.urlImg" />
						</ion-row>
					</IonGrid>
				</section>
			</div>
			<app-footer></app-footer>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import { IonPage, IonContent, IonCol, IonGrid, IonRow } from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import { ref } from "vue";
const infoAnimal = ref([
	{
		animal: "Perro",
		estado: "adopcion-urgente",
		Nombre: "Max",
		raza: "Labrador Retriever",
		urlImg: "../../public/img/perro.jpg",
		altura: "grande",
		sexo: "macho",
		peso: 30,
	},
	{
		animal: "Gato",
		estado: "apadrinado",
		Nombre: "Luna",
		raza: "Siamés",
		urlImg: "../../public/img/gato.jpg",
		altura: "mediano",
		sexo: "hembra",
		peso: 5,
	},
	{
		animal: "Perro",
		estado: "casos-especiales",
		Nombre: "Rocky",
		raza: "Bulldog Francés",
		urlImg: "../../public/img/perro.jpg",
		altura: "pequeño",
		sexo: "macho",
		peso: 15,
	},
	{
		animal: "Gato",
		estado: "sin-estado",
		Nombre: "Simba",
		raza: "Maine Coon",
		urlImg: "../../public/img/gato.jpg",
		altura: "mgrande",
		sexo: "macho",
		peso: 20,
	},
	{
		animal: "Perro",
		estado: "casos-especiales",
		Nombre: "Bella",
		raza: "Poodle",
		urlImg: "../../public/img/perro.jpg",
		altura: "pequeño",
		sexo: "hembra",
		peso: 10,
	},
]);
const animal = ref({
	animal: "Perro",
	descripcion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quibusdam magni sequi deserunt dolore voluptas delectus adipisci suscipit officia odit. Facere magnam consectetur nesciunt labore nostrum, aspernatur et perspiciatis esse.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatibus esse mollitia consequatur magni, laboriosam, cumque, quis minima explicabo tempora quidem molestias nihil aperiam id ab ea exercitationem minus tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi voluptatibus sapiente? Quae ut fugit sapiente saepe rem esse porro natus odit nisi fugiat reprehenderit eum non atque, provident repudiandae.`,
	estado: "adopcion-urgente",
	Nombre: "Max",
	raza: "Labrador Retriever",
	urlImg: "../../public/img/perro.jpg",
	altura: "grande",
	sexo: "macho",
	peso: 30,
	entrada: new Date(Date.now()).toLocaleString().split(",")[0],
	nacimiento: new Date(Date.now()).toLocaleString().split(",")[0],
});
</script>

<style lang="scss" scoped>
.content {
	padding: 10px;
	display: block !important;

	.infoAnimal {
		.datosTecnicos {
			margin: 10px;

			img {
				max-height: 500px;
				object-fit: cover;
			}

			ion-row {
				border-bottom: 1px solid gray;
				color: black;

				.key {
					font-weight: bold;
				}

				ion-col {
					display: flex;
					align-items: center;
					height: 45px;
				}
			}
		}

		.adoptaBotones {
			margin: 20px;
		}

		h1,
		p {
			text-align: justify;
			white-space: pre-wrap;
			color: black;
		}
	}

	.otrosAnimales {
		margin-top: 50px;

		h2 {
			color: black;
			text-align: center;
			margin: 10px;
		}

		.line {
			height: 1px;
			background-color: black;
			width: 33%;
		}
	}
}
</style>
