<template>
  <ion-page>
    <ion-content>
      <SubHeader
          img-url="/img/pexels-hiang-kanjinna-1629061.jpg"
          infoBtn="Requisitos para adoptar"
          texto="En nuestra misión de proteger a los animales, somos la voz de los sin voz, los defensores de los desamparados. Con amor y dedicación, salvamos vidas y construimos un futuro donde cada criatura pueda vivir en paz y libertad."
          titulo="Protectora de los más vulnerables"></SubHeader>
      <section class="ayudanos text-center">
        <div class="main-wrapper">
          <h2>¿No sabes como ayudarnos?</h2>
          <p>
            Puedes contribuir con la protectora de diversas formas,
            desde adoptar a un animal necesitado hasta donar
            alimentos, tiempo o recursos económicos. Cada pequeña
            acción suma y marca una gran diferencia en la vida de
            los animales que protegemos.
          </p>
          <IonGrid>
            <IonRow class="contenedorArticulos">
              <ion-col
                  class="adopta text-center article ion-no-padding"
                  router-link="/adopta"
                  size="12"
                  size-lg="3" size-md="5">
                <div>
                  <h3>Adopta</h3>
                  <p>
                    Fomenta el amor y la lealtad: adopta y
                    cambia una vida para siempre.
                  </p>
                </div>
              </ion-col>
              <ion-col
                  class="voluntario text-center article ion-no-padding"
                  router-link="/voluntariado"
                  size="12"
                  size-lg="3"
                  size-md="6">
                <div>
                  <h3>Hazte voluntario</h3>
                  <p>
                    Hazte socio y sé parte activa de nuestra
                    misión de protección animal.
                  </p>
                </div>
              </ion-col>
              <ion-col
                  class="dona text-center article ion-no-padding"
                  router-link="/donaciones"
                  size="12"
                  size-lg="3"
                  size-md="11">
                <div>
                  <h3>Dona</h3>
                  <p>
                    Dona y ayuda a construir un futuro más
                    brillante para los más vulnerables.
                  </p>
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

            <AppCartaAnimal
                v-for="animal in infoAnimal"
                :id="animal.id"
                :key="animal.nombre"
                :animal="animal.tipo"
                :estado-adopcion="animal.estado_adopcion"
                :nombre="animal.nombre"
                :raza="animal.raza"
                :urlImg="API_FILE_URL + animal.img"/>
          </ion-row>
        </ion-grid>
      </section>
      <section class="ong text-center">
        <div class="main-wrapper">
          <h2>Empresas solidarias</h2>
          <p>
            Gracias a ellas podemos seguir ejerciendo nuestra labor
            dia a dia
          </p>
          <div>
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/ams_logo.jpg"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/cacma.jpeg"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/elRefugio.png"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/libera.png"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/logouprodea.png"/>
                </div>

                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/ams_logo.jpg"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/cacma.jpeg"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/elRefugio.png"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/libera.png"/>
                </div>
                <div class="slide">
                  <img
                      alt=""
                      src="/img/logosONG/logouprodea.png"/>
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
<script lang="ts" setup>
import SubHeader from "@/components/SubHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {IonCol, IonContent, IonGrid, IonPage, IonRow} from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import {getAnimales} from "@/services/animal";
import {onMounted, ref} from "vue";
import {API_FILE_URL} from "@/middleware/secrets";

const infoAnimal = ref();
const filtros = ref({
  tipoPerro: false,
  tipoGato: false,
  urgente: false,
  especial: false,
  apadrinando: false,
  sinEstado: false,
  hembra: false,
  macho: false,
  tamanyo: "todos",
  peso: 0,
});
onMounted(async () => {
  infoAnimal.value = await getAnimales(1, filtros.value);
});
</script>
<style lang="scss" scoped>
.text-center {
  text-align: center;
}

.adopciones {
  padding: 20px;

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
  background-color: #77503a;
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
        border-radius: 0 5px 5px 0;
        padding: 10px;
        margin: 220px 10px 10px 0;
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
