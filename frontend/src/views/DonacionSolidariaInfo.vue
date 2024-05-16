<template>
    <ion-page>
        <ion-content>
            <div class="main-wrapper">
                <section class="donation-info">
                    <ion-grid class="fondo-naranja">
                        <ion-row>
                            <ion-col size="12" size-md="4">
                                <img class="img-height" :src="`http://localhost:3000${infoDonacion?.img}`" alt="Foto Animal Urgente">
                            </ion-col>
                            <ion-col>
                                <h1>{{ infoDonacion?.titulo }}</h1>
                                <p><strong>Nombre:</strong> {{ infoDonacion?.animal.nombre }}</p>
                                <p><strong>Fecha de inicio:</strong> {{ infoDonacion?.fecha_inicio }}</p>
                                <p><strong>Importe:</strong> {{ infoDonacion?.dinero_necesario }}€</p>
                                <DonacionSolidariaInfoModal :animal-id="infoDonacion?.id as string" :animal-name="infoDonacion?.animal.nombre as string"/>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <p>{{ infoDonacion?.contexto }}</p>
                        </ion-row>
                    </ion-grid>
                </section>
                <section class="donation-range">
                    <h2>Necesitamos {{ infoDonacion?.dinero_necesario }}€</h2>
                    <div class="progress">
                        <div class="progress-done" :style="{ width: progressBarWidth }">
                        <span class="progress-text">Dinero Recaudad: {{ progressBarWidth }}</span>
                        </div>
                    </div>
                </section>
                <section class="other-solidary-donation">
                    <ion-grid class="list-donation main-wrapper">
                        <ion-row class="ion-justify-content-center">
                            <DonacionSolidariaCard v-for="donacion in listaDonaciones" :key="donacion.id" :id="donacion.id"
                            :nombre="donacion.animal.nombre" :descripcion="donacion.contexto" :donado="donacion.dinero_alcanzado"
                            :fondoNecesario="donacion.dinero_necesario" :urlImg="`${API_FILE_URL}${donacion.img}`" />
                        </ion-row>
                    </ion-grid>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import DonacionSolidariaCard from "@/components/DonacionSolidariaCard.vue";
import DonacionSolidariaInfoModal from "@/components/DonacionSolidariaInfoModal.vue";
import AppFooter from '@/components/AppFooter.vue';
import { getDonacionInfo, getDonacionesOtras } from "@/services/donacion";
import { useRoute } from "vue-router";
import { Donacion } from "@/types/Donacion";
import {API_FILE_URL} from "@/middleware/secrets";

const infoDonacion = ref<Donacion | undefined>(undefined);
const listaDonaciones = ref();
const progressBarWidth = ref("0%")
function calculateProgress(dinero_necesario:number,dinero_alcanzado:number) {
    const total = dinero_alcanzado * 100 / dinero_necesario
    progressBarWidth.value = total as unknown as string + '%'
}


onMounted(async () => {
    const route = useRoute();
    const donacionId = route.params.donacion_id as string;
    infoDonacion.value = await getDonacionInfo(donacionId);
    const dineroNecesarioInt = infoDonacion.value?.dinero_necesario as unknown as number
    const dineroAlcanzadoInt = infoDonacion.value?.dinero_alcanzado as unknown as number
    calculateProgress(dineroNecesarioInt,dineroAlcanzadoInt)
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
<style scoped lang="scss">
.main-wrapper {
    max-width: 1280px;
    padding: 0px 20px;
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
        background: #a17c8d;
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