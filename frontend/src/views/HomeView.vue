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
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum,
                        eum
                        minus
                        perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
                  </div>
               </article>
               <article class="voluntario text-center">
                  <div>
                     <h3>Hazte voluntario</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum,
                        eum
                        minus
                        perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
                  </div>
               </article>
               <article class="dona text-center">
                  <div>
                     <h3>Dona</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum,
                        eum
                        minus
                        perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
                  </div>
               </article>
            </div>
         </section>
         <section class="adopciones text-center">
            <h2>Adopciones urgentes</h2>
            <p>Conoce nuestros animales que necesitan tu ayuda</p>
            <div>
               ¿Componente de perritos?
            </div>
         </section>
         <section class="ong text-center">
            <h2>Empresas solidarias</h2>
            <p>Gracias a ellas podemos seguir ejerciendo nuestra labor dia a dia</p>
            <div>
               ¿Curresel empresas?
            </div>
         </section>
      </ion-content>
   </ion-page>
</template>
<script>
import { IonPage, IonContent } from '@ionic/vue';
</script>
<style lang="scss" scoped>
.subheader {
   height: 50vh;
   background-image: url(../../public/img/pexels-hiang-kanjinna-1629061.jpg);
   background-size: cover;
   background-position: center;
}

.text-center {
   text-align: center;
}

.adopciones {
   background-color: #F2F2F2;
   padding: 20px;
   color: black;
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