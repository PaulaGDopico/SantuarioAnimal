<template>
	<ion-page>
		<ion-content>
			<SubHeader
				titulo="Lorem ipsum dolor"
				texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente blanditiis vitae consequatur mollitia quibusdam debitis necessitatibus et. Error, nisi iure repellat recusandae, atque dolorum autem fugiat provident ipsa sit ipsam?"
				img-url="/img/pexels-helena-lopes-1959054.jpg"
				infoBtn="Requisitos para adoptar"></SubHeader>
			<div class="content main-wrapper">
				<section class="filtros">
					<form action="">
						<h2>Tipo Animal</h2>
						<ion-checkbox
							v-model="filtros.tipoPerro"
							label-placement="end"
							name="perro"
							id="perro"
							>Perro</ion-checkbox
						>
						<br />
						<ion-checkbox
							v-model="filtros.tipoGato"
							label-placement="end"
							name="gato"
							id="gato"
							>Gato</ion-checkbox
						>
						<h2>Estado</h2>
						<ion-checkbox
							v-model="filtros.urgente"
							label-placement="end"
							name="urgente"
							id="urgente"
							>Adopción urgente</ion-checkbox
						>
						<br />
						<ion-checkbox
							v-model="filtros.especial"
							label-placement="end"
							name="especial"
							id="especial"
							>Casos especiales</ion-checkbox
						>
						<ion-checkbox
							v-model="filtros.apadrinando"
							label-placement="end"
							name="apadrinando"
							id="apadrinando"
							>Apadrinando</ion-checkbox
						>
						<br />
						<ion-checkbox
							v-model="filtros.sinEstado"
							label-placement="end"
							name="sinEstado"
							id="sinEstado"
							>Sin clasificación</ion-checkbox
						>
						<h2>Sexo</h2>
						<ion-checkbox
							v-model="filtros.hembra"
							label-placement="end"
							name="hembra"
							id="hembra"
							>Hembra</ion-checkbox
						><br />
						<ion-checkbox
							v-model="filtros.macho"
							label-placement="end"
							name="macho"
							id="macho"
							>Macho</ion-checkbox
						>
						<h2>Altura</h2>
						<select
							name="altura"
							id="altura"
							v-model="filtros.altura">
							<option value="todos" selected>Todos</option>
							<option value="mgrande">Muy grande</option>
							<option value="grande">Grande</option>
							<option value="mediano">Mediano</option>
							<option value="pequeño">Pequeño</option>
							<option value="mpequeño">Muy pequeño</option>
						</select>
						<h2>Peso</h2>
						<div class="d-flex align-peso">
							<label for="peso" class="peso">0</label>
							<ion-range
								aria-label="Range with pin"
								:pin="true"
								:pin-formatter="pinFormatter"
								name="peso"
								id="peso"
								v-model="filtros.peso"></ion-range>
							<label for="peso" class="peso">100</label>
						</div>
					</form>
				</section>
				<section class="listaAnimales">
					<div class="cartasAnimal d-flex justify-content-center">
						<AppCartaAnimal
							v-for="animal in result"
							:key="animal.id"
							:id="animal.id"
							:animal="animal.tipo"
							:estado-adopcion="animal.estado_adopcion"
							:nombre="animal.nombre"
							:raza="animal.raza"
							:urlImg="API_FILE_URL + animal.img" />
					</div>
					<div class="d-flex justify-content-center paginacion">
						<a
							:href="`http://localhost:8100/adopta/`"
							class="buttonPag"
							>Anterior</a
						>
						<a
							v-for="(numero, index) in paginas"
							:key="index"
							class="numberPag"
							:href="`http://localhost:8100/adopta/${numero}`">
							{{ index + 1 }}
						</a>
						<a
							:href="`http://localhost:8100/adopta/`"
							class="buttonPag"
							>Siguiente</a
						>
					</div>
				</section>
			</div>
			<app-footer></app-footer>
		</ion-content>
	</ion-page>
</template>
<script setup lang="ts">
import { API_FILE_URL } from "@/middleware/secrets";
import SubHeader from "@/components/SubHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { IonPage, IonContent, IonCheckbox, IonRange } from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import { computed, onMounted, ref } from "vue";
import { getAnimales } from "@/services/animal";
import { Animal } from "@/types/Animal";

const pinFormatter = (value: any) => `${value}kg`;

const infoAnimal = ref<Animal[] | null>(null);
onMounted(async () => {
	const animals = await getAnimales(2);
	if (Array.isArray(animals)) {
		infoAnimal.value = animals;
	} else {
		console.error("Error: Array de animales vacio");
	}
});
const filtros = ref({
	tipoPerro: false,
	tipoGato: false,
	urgente: false,
	especial: false,
	apadrinando: false,
	sinEstado: false,
	hembra: false,
	macho: false,
	altura: "todos",
	peso: 0,
});
const result = computed(() => {
	if (!infoAnimal.value) return null;
	return infoAnimal.value.filter((animal: Animal) => {
		return (
			//Filtrar por tipo de animal
			((!filtros.value.tipoPerro && !filtros.value.tipoGato) ||
				(filtros.value.tipoPerro && animal.tipo === "Perro") ||
				(filtros.value.tipoGato && animal.tipo === "Gato")) && //Filtrar por estado
			((!filtros.value.urgente &&
				!filtros.value.especial &&
				!filtros.value.apadrinando &&
				!filtros.value.sinEstado) ||
				(filtros.value.urgente &&
					animal.estado_adopcion === "adopcion-urgente") ||
				(filtros.value.especial &&
					animal.estado_adopcion === "casos-especiales") ||
				(filtros.value.apadrinando &&
					animal.estado_adopcion === "apadrinado") ||
				(filtros.value.sinEstado &&
					animal.estado_adopcion === "sin-estado")) && //Filtrar por genero
			((!filtros.value.hembra && !filtros.value.macho) ||
				(filtros.value.hembra && animal.sexo === "hembra") ||
				(filtros.value.macho && animal.sexo === "macho")) && //Filtrar por peso
			(filtros.value.peso === 0 ||
				filtros.value.peso == parseInt(animal.peso)) /*&&*/ //filtrar por alura
			// (filtros.value.altura === "todos" ||
			// 	filtros.value.altura == animal.altura)
		);
	});
});
const paginas = ref(10);
</script>
<style lang="scss">
.align-peso {
	align-items: center;
}

ion-checkbox {
	--size: 32px;
}

#peso {
	padding: 0px;
}

ion-checkbox::part(container) {
	border-radius: 6px;
	border: 2px solid #ff914d;
	margin: 5px 0px;
}

.content {
	display: flex;

	.listaAnimales {
		width: 80%;

		.cartasAnimal {
			align-items: center;
			flex-wrap: wrap;

			.cartaAnimal {
				width: 15%;
			}
		}

		.paginacion {
			margin: 20px;

			.buttonPag {
				margin: 0px 10px;
				color: white;
				padding: 5px;
				background-color: #ff914d;
				border-radius: 5px;
				display: flex;
				align-items: center;
				text-decoration: none;
			}

			.numberPag {
				text-decoration: none;
				background-color: white;
				border-radius: 5px;
				padding: 5px 10px;
				margin: 5px;
			}
		}
	}

	.filtros {
		padding: 0px 35px;
		width: 20%;

		.peso {
			margin: 0px 15px;
		}

		input[type="checkbox"] {
			background-color: white !important;
		}

		select {
			padding: 5px;
			border-radius: 6px;
			border: 2px solid #ff914d;
			background-color: white;
		}
	}
}
</style>
