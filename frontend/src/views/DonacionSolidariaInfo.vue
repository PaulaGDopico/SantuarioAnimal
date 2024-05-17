<template>
  <ion-page>
    <ion-content>
      <div class="main-wrapper">
        <section class="donation-info">
          <ion-grid v-if="infoDonacion" class="fondo-naranja">
            <ion-row>
              <ion-col size="12" size-md="4">
                <img :src="`http://localhost:3000${infoDonacion.img}`" alt="Foto Animal Urgente" class="img-height">
              </ion-col>
              <ion-col>
                <h1>{{ infoDonacion.titulo }}</h1>
                <p><strong>Nombre:</strong> {{ infoDonacion.animal.nombre }}</p>
                <p><strong>Fecha de inicio:</strong> {{ infoDonacion.fecha_inicio }}</p>
                <p><strong>Importe:</strong> {{ infoDonacion.dinero_necesario }}€</p>
                <DonacionSolidariaInfoModal :animal-id="infoDonacion.id.toString()"
                                            :animal-name="infoDonacion.animal.nombre"/>
              </ion-col>
            </ion-row>
            <ion-row>
              <p>{{ infoDonacion.contexto }}</p>
            </ion-row>
          </ion-grid>
        </section>
        <section class="donation-range">
          <h2>Necesitamos {{ infoDonacion?.dinero_necesario }}€</h2>
          <div class="progress">
            <div :style="{ width: progressBarWidth }" class="progress-done">
              <span class="progress-text">Dinero Recaudado: {{ progressBarWidth }}</span>
            </div>
          </div>
        </section>
        <section class="other-solidary-donation">
          <ion-grid class="list-donation main-wrapper">
            <ion-row class="ion-justify-content-center">
              <DonacionSolidariaCard v-for="donacion in listaDonaciones" :id="donacion.id" :key="donacion.id"
                                     :descripcion="donacion.contexto" :donado="donacion.dinero_alcanzado"
                                     :fondoNecesario="donacion.dinero_necesario"
                                     :nombre="donacion.animal.nombre"
                                     :urlImg="`${API_FILE_URL}${donacion.img}`"/>
            </ion-row>
          </ion-grid>
        </section>
      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import {IonCol, IonContent, IonGrid, IonPage, IonRow,} from "@ionic/vue";
import {onMounted, ref} from "vue";
import DonacionSolidariaCard from "@/components/DonacionSolidariaCard.vue";
import DonacionSolidariaInfoModal from "@/components/DonacionSolidariaInfoModal.vue";
import AppFooter from '@/components/AppFooter.vue';
import {getDonacionesOtras, getDonacionInfo} from "@/services/donacion";
import {useRoute} from "vue-router";
import {Donacion} from "@/types/Donacion";
import {API_FILE_URL} from "@/middleware/secrets";

const infoDonacion = ref<Donacion | undefined>(undefined);
const listaDonaciones = ref();
const progressBarWidth = ref("0%")

function calculateProgress(dinero_necesario: number, dinero_alcanzado: number) {
  const total = dinero_alcanzado * 100 / dinero_necesario
  progressBarWidth.value = total as unknown as string + '%'
}


onMounted(async () => {
  const route = useRoute();
  const donacionId = route.params.donacion_id.toString();
  infoDonacion.value = await getDonacionInfo(donacionId);
  const dineroNecesarioInt = parseInt(infoDonacion.value!.dinero_necesario)
  const dineroAlcanzadoInt = parseInt(infoDonacion.value!.dinero_alcanzado)
  calculateProgress(dineroNecesarioInt, dineroAlcanzadoInt)
  //OTROS ANIMALEs
  const animals = await getDonacionesOtras();
  if (Array.isArray(animals)) {
    listaDonaciones.value = animals;
  } else {
    console.error("Error: Array de animales vacio");
    listaDonaciones.value = null;
  }
});
</script>
<style lang="scss" scoped>
.main-wrapper {
  max-width: 1280px;
  padding: 0 20px;
}

.img-height {
  width: 100%;
  height: 15rem;
  object-fit: cover;
}

.fondo-naranja {
  padding: 30px;
  background-color: #ff914d50;
  border-radius: 10px;
  border-bottom: 5px solid #ff914d;

  img {
    border-radius: 10px;
  }

  h1 {
    color: #ff914d;
  }

  p {
    text-align: justify;
    white-space: pre-wrap;
  }
}

.progress {
  position: relative;
  width: 100%;
  height: 54px;
  margin: 15px 0;
  border-radius: 71px;
  background-color: #ff914d50;

  .progress-done {
    display: flex;
    width: 0;
    height: 100%;
    border-radius: 71px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 54px;
    transition: 1s ease 0.5s;
    align-items: center;
    justify-content: space-between;
    background-color: #ff914d;

    .progress-text {
      position: absolute;
      left: 30px;
    }
  }
}

</style>