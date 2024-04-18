<template>
   <ion-page>
      <ion-content>
         <section class="subheader">
            <div>
               <h1>Lorem ipsum dolor sit amet consectetur</h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam perspiciatis consequatur est a
                  incidunt
                  rem ab, hic magni esse veniam ut corporis illum maiores molestiae temporibus eveniet praesentium ad.
               </p>
            </div>
         </section>
         <section class="ayudanos text-center">
            <div class="main-wrapper">
               <h2>¿No sabes como ayudarnos?</h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dicta pariatur laudantium. Error
                  dolorum
                  quia enim nemo, necessitatibus quibusdam alias maiores voluptas dolore facere quasi natus id quam nam.
                  Amet!
               </p>
               <div class="contenedorArticulos">
                  <article class="adopta text-center">
                     <div>
                        <h3>Adopta</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis
                           nostrum,
                           eum</p>
                     </div>
                  </article>
                  <article class="voluntario text-center">
                     <div>
                        <h3>Hazte voluntario</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis
                           nostrum,
                           eum</p>
                     </div>
                  </article>
                  <article class="dona text-center">
                     <div>
                        <h3>Dona</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis
                           nostrum,
                           eum</p>
                     </div>
                  </article>
               </div>
            </div>

         </section>
         <section class="adopciones text-center main-wrapper">
            <h2>Adopciones urgentes</h2>
            <p>Conoce nuestros animales que necesitan tu ayuda</p>
            <div class="cartasAnimal">
               <AppCartaAnimal v-for="animal in infoAnimal" :id="1" :animal="animal.animal" :estado-adopcion="animal.estado"
                  :nombre="animal.Nombre" :raza="animal.raza" :urlImg="animal.urlImg" />
            </div>
         </section>
         <section class="ong text-center ">
            <div class="main-wrapper">
               <h2>Empresas solidarias</h2>
               <p>Gracias a ellas podemos seguir ejerciendo nuestra labor dia a dia</p>
               <div>
                  ¿Curresel empresas?
               </div>
            </div>

         </section>
         <app-footer></app-footer>
      </ion-content>
   </ion-page>
</template>
<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
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
	}]
</script>
<style lang="scss" scoped>
.subheader {
   height: 50vh;
   background-image: url(../../public/img/pexels-hiang-kanjinna-1629061.jpg);
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

.text-center {
   text-align: center;
}

.adopciones {
   background-color: #F2F2F2;
   padding: 20px;
   color: black;

   .cartasAnimal {
      display: flex;
      justify-content: center;
      align-items: center;
   }
}

.ong {
   background-color: white;
   padding: 20px;
   color: black;
}

.ayudanos {
   background-color: #77503A;
   padding: 20px;
   color: white;

   .contenedorArticulos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      article {
         width: 30%;
         margin: 10px;
         background-size: cover;
         background-position: center;
         height: 400px;
         border-radius: 5px;

         div {
            background-color: #ff914dab;
            width: 345px;
            border-radius: 0px 5px 5px 0px;
            ;
            padding: 10px;
            margin: 220px 10px 10px 0px;
         }
      }

      .adopta {
         background-image: url(../../public/img/pexels-janko-ferlic-2886043.jpg);
      }

      .voluntario {
         background-image: url(../../public/img/pexels-snapwire-46024.jpg);
      }

      .dona {
         background-image: url(../../public/img/pexels-evg-kowalievska-1416792.jpg);
      }
   }
}
</style>