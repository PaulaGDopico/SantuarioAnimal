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
			<section class="filtros">

			</section>
			<section class="listaAnimales">
				<div class="cartasAnimal">
					<AppCartaAnimal v-for="animal in infoAnimal" :animal="animal.animal"
						:estado-adopcion="animal.estado" :nombre="animal.Nombre" :raza="animal.raza"
						:urlImg="animal.urlImg" />
				</div>
			</section>
		</ion-content>
	</ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppCartaAnimal from '@/components/AppCartaAnimal.vue';
const infoAnimal = [{
	animal: 'Perro',
	estado: 'casos-especiales',
	Nombre: 'Felix',
	raza: 'American Staffordshire Terrier',
	urlImg: '../../public/img/felix.jpg'
}, {
	animal: 'Perro',
	estado: 'casos-especiales',
	Nombre: 'Felix',
	raza: 'American Staffordshire Terrier',
	urlImg: '../../public/img/felix.jpg'
}, {
	animal: 'Perro',
	estado: 'casos-especiales',
	Nombre: 'Felix',
	raza: 'American Staffordshire Terrier',
	urlImg: '../../public/img/felix.jpg'
}, {
	animal: 'Perro',
	estado: 'casos-especiales',
	Nombre: 'Felix',
	raza: 'American Staffordshire Terrier',
	urlImg: '../../public/img/felix.jpg'
}, {
	animal: 'Perro',
	estado: 'casos-especiales',
	Nombre: 'Felix',
	raza: 'American Staffordshire Terrier',
	urlImg: '../../public/img/felix.jpg'
},]
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
</style>
