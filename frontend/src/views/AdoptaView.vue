<template>
	<ion-page>
		<ion-content>
			<section class="subheader">
				<div>
					<h1>Lorem ipsum dolor sit amet consectetur</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam perspiciatis consequatur
						est a
						incidunt
						rem ab, hic magni esse veniam ut corporis illusdfdsfsdfsdfsdfsdfsfdm maiores molestiae
						temporibus
						eveniet praesentium ad.
					</p>
				</div>
			</section>
			<div class="content">
				<section class="filtros">
				<form action="">
					<p>Hola</p>
				</form>
			</section>
			<section class="listaAnimales">
				<div class="cartasAnimal">
					<AppCartaAnimal v-for="animal in infoAnimal" :animal="animal.animal"
						:estado-adopcion="animal.estado" :nombre="animal.Nombre" :raza="animal.raza"
						:urlImg="animal.urlImg" />
				</div>
			</section>
			</div>
		</ion-content>
	</ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppCartaAnimal from '@/components/AppCartaAnimal.vue';
const infoAnimal = [
	{
		animal: 'Perro',
		estado: 'adopcion-urgente',
		Nombre: 'Max',
		raza: 'Labrador Retriever',
		urlImg: '../../public/img/perro.jpg'
	},
	{
		animal: 'Gato',
		estado: 'apadrinado',
		Nombre: 'Luna',
		raza: 'Siamés',
		urlImg: '../../public/img/gato.jpg'
	},
	{
		animal: 'Perro',
		estado: 'casos-especiales',
		Nombre: 'Rocky',
		raza: 'Bulldog Francés',
		urlImg: '../../public/img/perro.jpg'
	},
	{
		animal: 'Gato',
		estado: 'sin-estado',
		Nombre: 'Simba',
		raza: 'Maine Coon',
		urlImg: '../../public/img/gato.jpg'
	},
	{
		animal: 'Perro',
		estado: 'casos-especiales',
		Nombre: 'Bella',
		raza: 'Poodle',
		urlImg: '../../public/img/perro.jpg'
	},
	{
		animal: 'Gato',
		estado: 'adopcion-urgente',
		Nombre: 'Milo',
		raza: 'British Shorthair',
		urlImg: '../../public/img/gato.jpg'
	},
	{
		animal: 'Perro',
		estado: 'sin-estado',
		Nombre: 'Coco',
		raza: 'Chihuahua',
		urlImg: '../../public/img/perro.jpg'
	},
	{
		animal: 'Gato',
		estado: 'apadrinado',
		Nombre: 'Nina',
		raza: 'Persa',
		urlImg: '../../public/img/gato.jpg'
	},
	{
		animal: 'Perro',
		estado: 'adopcion-urgente',
		Nombre: 'Duke',
		raza: 'Golden Retriever',
		urlImg: '../../public/img/perro.jpg'
	},
	{
		animal: 'Gato',
		estado: 'sin-estado',
		Nombre: 'Mia',
		raza: 'Ragdoll',
		urlImg: '../../public/img/gato.jpg'
	}
];

</script>
<style lang="scss">
.subheader {
	height: 50vh;
	background-image: url(../../public/img/pexels-helena-lopes-1959054.jpg);
	background-size: cover;
	background-position: center;
	justify-content: end;
	display: flex;
	align-items: center;

	div {
		width: 500px;
		margin-right: 160px;
	}
}
.content {
	display: flex;
	.listaAnimales {
	width: 80%;
	.cartasAnimal {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		.cartaAnimal {
			width: 15%;
		}
	}
}

.filtros {
	width: 20%;
}
}

</style>
