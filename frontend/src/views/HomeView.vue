<template>
   <ion-page>
      <ion-content>
         <SubHeader titulo="Protectora de los más vulnerables"
            texto="En nuestra misión de proteger a los animales, somos la voz de los sin voz, los defensores de los desamparados. Con amor y dedicación, salvamos vidas y construimos un futuro donde cada criatura pueda vivir en paz y libertad."
            img-url="/img/pexels-hiang-kanjinna-1629061.jpg" infoBtn="Requisitos para adoptar"></SubHeader>
         <section class="ayudanos text-center">
            <div class="main-wrapper">
               <h2>¿No sabes como ayudarnos?</h2>
               <p>Puedes contribuir con la protectora de diversas formas, desde adoptar a un animal necesitado hasta
                  donar alimentos, tiempo o recursos económicos. Cada pequeña acción suma y marca una gran diferencia en
                  la vida de los animales que protegemos.
               </p>
               <IonGrid>
                  <IonRow class="contenedorArticulos">
                     <ion-col size="12" size-md="6" size-lg="3" class="adopta text-center article ion-no-padding">
                        <div>
                           <h3>Adopta</h3>
                           <p>Fomenta el amor y la lealtad: adopta y cambia una vida para siempre.</p>
                        </div>
                     </ion-col>
                     <ion-col size="12" size-md="6" size-lg="3" class="voluntario text-center article ion-no-padding">
                        <div>
                           <h3>Hazte voluntario</h3>
                           <p>Hazte socio y sé parte activa de nuestra misión de
                              protección animal.</p>
                        </div>
                     </ion-col>
                     <ion-col size="12" size-md="5" size-lg="3" class="dona text-center article ion-no-padding">
                        <div>
                           <h3>Dona</h3>
                           <p>Dona y ayuda a construir un futuro más brillante para los más
                              vulnerables.</p>
                        </div>
                     </ion-col>
                  </IonRow>
               </IonGrid>
            </div>
         </section>
         <section class="adopciones text-center main-wrapper">
            <h2>Adopciones urgentes</h2>
            <p>Conoce nuestros animales que necesitan tu ayuda</p>
            <ion-grid>
               <ion-row class="cartasAnimal">
                  <AppCartaAnimal v-for="animal in infoAnimal" :id="1" :animal="animal.animal"
                     :estado-adopcion="animal.estado" :nombre="animal.Nombre" :raza="animal.raza"
                     :urlImg="animal.urlImg" />
               </ion-row>
            </ion-grid>
         </section>
         <section class="ong text-center ">
            <div class="main-wrapper">
               <h2>Empresas solidarias</h2>
               <p>Gracias a ellas podemos seguir ejerciendo nuestra labor dia a dia</p>
               <div>
                  <div class="slider">
                     <div class="slide-track">
                        <div class="slide">
                           <img src="/img/logosONG/ams_logo.jpg" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/cacma.jpeg" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/elRefugio.png" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/libera.png" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/logouprodea.png" alt="">
                        </div>

                        <div class="slide">
                           <img src="/img/logosONG/ams_logo.jpg" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/cacma.jpeg" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/elRefugio.png" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/libera.png" alt="">
                        </div>
                        <div class="slide">
                           <img src="/img/logosONG/logouprodea.png" alt="">
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </section>
         <app-footer></app-footer>
      </ion-content>
   </ion-page>
</template>
<script setup lang="ts">
import SubHeader from '@/components/SubHeader.vue'
import AppFooter from '@/components/AppFooter.vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import AppCartaAnimal from '@/components/AppCartaAnimal.vue';
const infoAnimal = [
   {
      animal: 'Perro',
      estado: 'adopcion-urgente',
      Nombre: 'Max',
      raza: 'Labrador Retriever',
      urlImg: '/img/perro.jpg'
   },
   {
      animal: 'Gato',
      estado: 'apadrinado',
      Nombre: 'Luna',
      raza: 'Siamés',
      urlImg: '/img/gato.jpg'
   },
   {
      animal: 'Perro',
      estado: 'casos-especiales',
      Nombre: 'Rocky',
      raza: 'Bulldog Francés',
      urlImg: '/img/perro.jpg'
   },
   {
      animal: 'Gato',
      estado: 'sin-estado',
      Nombre: 'Simba',
      raza: 'Maine Coon',
      urlImg: '/img/gato.jpg'
   },
   {
      animal: 'Perro',
      estado: 'casos-especiales',
      Nombre: 'Bella',
      raza: 'Poodle',
      urlImg: '/img/perro.jpg'
   }]
</script>
<style lang="scss" scoped>
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

      .article {
         width: 30%;
         margin: 10px;
         background-size: cover;
         background-position: center;
         height: 400px;
         border-radius: 5px;

         div {
            background-color: #ff914dab;
            width: 85%;
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
// CARRUSEL
.slider {
   width: 55vw;
   height: auto;
   margin: auto;
   overflow: hidden;
}

.slider .slide-track {
   display: flex;
   animation: scroll 40s linear infinite;
   -webkit-animation: scroll 40s linear infinite;
   width: calc(200px * 14);
}

.slider .slide {
   width: 200px;
}

.slider .slide img {
   width: 100%;
   object-fit: contain;
   height: 70px;
}

@keyframes scroll {
   0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
   }

   100% {
      -webkit-transform: translateX(calc(-200px * 5));
      transform: translateX(calc(-200px * 5));
   }
}
</style>