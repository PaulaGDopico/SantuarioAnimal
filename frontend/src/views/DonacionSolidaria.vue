<template>
    <ion-page>
        <ion-content>
            <SubHeader titulo="Protectora de los más vulnerables"
                texto="En nuestra misión de proteger a los animales, somos la voz de los sin voz, los defensores de los desamparados. Con amor y dedicación, salvamos vidas y construimos un futuro donde cada criatura pueda vivir en paz y libertad."
                img-url="/img/pexels-hiang-kanjinna-1629061.jpg" infoBtn="Requisitos para adoptar"></SubHeader>

            <section class="main-wrapper info">
                <h2>
                    Tenemos un reto para ti
                </h2>
                <p>
                    Con frecuencia recibimos en nuestro centro a animales que provienen de situaciones extremas.
                    Algunos
                    de ellos llegan en condiciones tan críticas que requieren intervenciones quirúrgicas, cuidados
                    intensivos, pruebas especializadas y tratamientos que conllevan costos veterinarios
                    significativos.
                    Para poder brindarles la atención necesaria, apreciamos enormemente cualquier contribución
                    solidaria
                    que podáis ofrecer. Entendemos que no todos tienen la misma capacidad para colaborar, pero para
                    nosotros, cada muestra de apoyo es invaluable.
                </p>
                <p>
                    Vuestras donaciones son vitales para mejorar la calidad de vida de nuestros animales y
                    proporcionarles una segunda oportunidad. Cada aportación, por pequeña que sea, marca la
                    diferencia
                    en su bienestar y futuro. Juntos, podemos marcar un cambio significativo en la vida de estos
                    seres
                    indefensos.
                </p>
            </section>
            <div class="orange-background">
                <ion-grid class="list-donation main-wrapper">
                    <ion-row class="ion-justify-content-center">
                        <DonacionSolidariaCard v-for="donacion in listaDonaciones" :key="donacion.id" :id="donacion.id"
                            :nombre="donacion.animal.nombre" :descripcion="donacion.contexto" :donado="donacion.dinero_alcanzado"
                            :fondoNecesario="donacion.dinero_necesario" :urlImg="`${donacion.img}`" />
                    </ion-row>
                </ion-grid>
            </div>

            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
} from "@ionic/vue";
import SubHeader from '@/components/SubHeader.vue';
import DonacionSolidariaCard from '@/components/DonacionSolidariaCard.vue';
import { onMounted, ref } from 'vue';
import AppFooter from '@/components/AppFooter.vue';
import { getDonaciones } from "@/services/donacion";

const listaDonaciones = ref();

onMounted(async () => {
    const animals = await getDonaciones();
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
    max-width: 1200px;
}

.info {
    padding: 20px 0px;
}

.list-donation {
    margin-bottom: 0px;
    padding-bottom: 20px;
}

.orange-background {
    background-color: #ff914d50;
}
</style>