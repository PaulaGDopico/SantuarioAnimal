<template>
	<ion-page>
		<ion-content>
			<div class="main">
				<section class="informacion">
					<h1>Sobre Nosotros</h1>
					<p>¡Bienvenido a Santuario Animal!</p>
					<p>En Santuario Animal, estamos comprometidos con la protección y el bienestar de los animales. Fundada en 2024, nuestra organización se ha dedicado incansablemente a brindar refugio, atención y amor a las mascotas necesitadas en nuestra comunidad.</p>
					<p>Nuestra misión es simple pero poderosa: salvar vidas, fomentar la adopción responsable y promover la conciencia sobre el cuidado adecuado de los animales. Cada día trabajamos arduamente para proporcionar un refugio seguro y cariñoso para perros, gatos y otras mascotas que han sido abandonadas, maltratadas o desatendidas.</p>
					<p>En Santuraio Animal, nos enorgullece decir que no solo rescatamos y rehabilitamos a los animales, sino que también los preparamos para encontrar hogares amorosos y permanentes. Trabajamos estrechamente con adoptantes potenciales para garantizar que cada mascota encuentre el hogar perfecto que se adapte a sus necesidades y personalidad única.</p>
					<p>Nuestro equipo está formado por amantes de los animales apasionados y dedicados que tienen un objetivo común: mejorar la vida de nuestros amigos peludos. Desde nuestros voluntarios hasta nuestro personal, cada miembro de Santuario Animal está comprometido con la causa y trabaja incansablemente para hacer del mundo un lugar mejor para los animales.</p>
					<p>Te invitamos a explorar nuestro sitio web para conocer más sobre nuestro trabajo, aprender sobre nuestras mascotas disponibles para adopción y descubrir cómo puedes ayudar. Ya sea que estés interesado en adoptar, donar o ser voluntario, ¡toda ayuda es bienvenida y apreciada!</p>
					<p>¡Gracias por visitar Santuario Animal y por unirte a nosotros en nuestra misión de salvar vidas y difundir el amor hacia los animales!</p>
				</section>
				<setion class="fotografias">
					<div class="primera">
						<img src="../../img/buneaPersona 1.png">
					</div>
					<div class="segunda">
						<img src="../../img/pataPerro 1.png">
					</div>
					<div class="tercera">
						<img src="../../img/pexels-goochie-poochie-19145897 1.png">
					</div>
					<div class="cuarta">
						<img src="../../img/rejas 1.png">
					</div>
				</setion>
			</div>
		 <app-footer></app-footer>
      </ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style lang="scss" scoped>
	.main{
		display: flex;
		flex-direction: column;
		align-items: center;	
	}
	.informacion{
		background-color: white;
		padding: 50px;
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		margin-top: 50px;
		border-radius: 20px;
		border-left: 1px solid #FF914D;
		border-right: 1px solid #FF914D;
		border-bottom: 10px solid #FF914D;
		margin-bottom: 50px;
		text-align: justify;
		h1{
			margin-bottom: 30px;
			margin-top: 0;
		}
	}
	@media (min-width: 768px){
		.fotografias{
			width: 90%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.primera, .segunda, .tercera, .cuarta{
				width: 24%;
				height: 250px;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			margin-bottom: 60px;
		}
	}

	@media (max-width: 767px) {
		.fotografias{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin-bottom: 60px;
			.primera, .segunda, .tercera, .cuarta{
				height: 250px;
				width: 100%;
				margin-top: 20px;
				margin-bottom: 20px;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}

</style>
