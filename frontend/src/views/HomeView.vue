<template>
   <section class="subheader">
      <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam perspiciatis consequatur est a incidunt
         rem ab, hic magni esse veniam ut corporis illum maiores molestiae temporibus eveniet praesentium ad.</p>
   </section>
   <section class="ayudanos">
      <h2>¿No sabes como ayudarnos?</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dicta pariatur laudantium. Error dolorum
         quia enim nemo, necessitatibus quibusdam alias maiores voluptas dolore facere quasi natus id quam nam. Amet!
      </p>
      <div class="contenedorArticulos">
         <article>
            <div>
               <h3>Adopta</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum, eum
                  minus
                  perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
            </div>
         </article>
         <article>
            <div>
               <h3>Hazte voluntario</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum, eum
                  minus
                  perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
            </div>
         </article>
         <article>
            <div>
               <h3>Dona</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptatem quis nostrum, eum
                  minus
                  perspiciatis obcaecati sint accusantium minima corrupti esse.</p>
            </div>
         </article>
      </div>
   </section>
   <section class="adopciones">
      <h2>Adopciones urgentes</h2>
      <p>Conoce nuestros animales que necesitan tu ayuda</p>
      <div>
         ¿Componente de perritos?
      </div>
   </section>
   <section class="ong">
      <h2>Empresas solidarias</h2>
      <p>Gracias a ellas podemos seguir ejerciendo nuestra labor dia a dia</p>
      <div>
         ¿Curresel empresas?
      </div>
   </section>
</template>
<script>

</script>
<style lang="scss">
.subheader {
   height: 50vh;
   background-image: url(../../public/img/pexels-francesco-ungaro-96938.jpg);
   background-size: cover;
   background-position: center;
}

.ayudanos {
   .contenedorArticulos {
      display: flex;
      article {
         div {
            background-color: ORANGE
         }
      }
   }
}
</style>