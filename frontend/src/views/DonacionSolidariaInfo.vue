<template>
    <ion-page>
        <ion-content>
            <div class="main-wrapper">
                <section class="donation-info">
                    <ion-grid class="fondo-naranja">
                        <ion-row>
                            <ion-col size="12" size-md="4">
                                <img :src="infoDonacion.img" alt="Foto Animal Urgente">
                            </ion-col>
                            <ion-col>
                                <h1>{{ infoDonacion.titulo }}</h1>
                                <p><strong>Nombre:</strong> {{ infoDonacion.animal }}</p>
                                <p><strong>Fecha de inicio:</strong> {{ infoDonacion.fecha_inicio }}</p>
                                <p><strong>Importe:</strong> {{ infoDonacion.dinero_necesario }}€</p>
                                <DonacionSolidariaInfoModal :animal-name="infoDonacion.animal"/>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <p>{{ infoDonacion.contexto }}</p>
                        </ion-row>
                    </ion-grid>
                </section>
                <section class="donation-range">
                    <h2>Necesitamos {{ infoDonacion.dinero_necesario }}€</h2>
                    <div class="progress">
                        <div class="progress-done" :style="{ width: progressBarWidth }">
                        <span class="progress-text">Dinero Recaudad: {{ progressBarWidth }}</span>
                        </div>
                    </div>
                </section>
                <section class="other-solidary-donation">
                    <ion-grid class="list-donation main-wrapper">
                        <ion-row class="ion-justify-content-center">
                            <DonacionSolidariaCard v-for="donacion in listaDonaciones" :key="donacion.id"
                                :id="donacion.id" :nombre="donacion.nombre" :descripcion="donacion.descripcion"
                                :donado="donacion.donado" :fondoNecesario="donacion.fondoNecesario"
                                :urlImg="donacion.urlImg" />
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

const infoDonacion = ref({
    id: 1,
    titulo: "¡Urgente operación!",
    contexto: `Pancho fue rescatado de la calle en un estado famélico y con problemas de movilidad.
Desde el primer momento, se mostró un perrito muy sociable y  cariñoso con las personas, por lo que seguramente convivió durante un  tiempo con la familia que la abandonó. Al principio, creímos que su  problema de movilidad venía provocado por algún golpe o atropello  durante el tiempo que tuvo que vivir en la calle pero, al realizarle  pruebas se le diagnosticó luxación de rótula en grado 3, que le impedía  moverse con normalidad y le provocaba mucho dolor.
Pancho solo tiene 2 añitos y tiene muchas ganas de correr, saltar, jugar  y disfrutar de la vida que tiene por delante. Para ello, necesitamos  operarle con urgencia antes que su luxación empeore y perjudique todavía  más su movilidad. Por desgracia, la operación tiene un coste muy alto,  concretamente de 1.000€ y necesitamos de vuestra ayuda para poder hacer  frente a este elevado gasto veterinario.`,
    img: "img/gato.jpg",
    dinero_necesario: 1000,
    dinero_alcanzado: 300,
    fecha_inicio: "1970-01-01T00:00:00.000Z",
    animal: "Nemu",
    animalID: 1,
    afiliado: "Jose Montesinos",
    afiliadoId: 1
});
const listaDonaciones = ref([
    {
        id: 1,
        nombre: "Tonia",
        descripcion: "Necesita ayuda por que si no se muere :(((",
        donado: 1000,
        fondoNecesario: 1000,
        urlImg: "img/gato.jpg"
    },
    {
        id: 2,
        nombre: "Tonia",
        descripcion: "Necesita ayuda por que si no se muere :(((",
        donado: 100,
        fondoNecesario: 1000,
        urlImg: "img/gato.jpg"
    },
    {
        id: 1,
        nombre: "Tonia",
        descripcion: "Necesita ayuda por que si no se muere :(((",
        donado: 1000,
        fondoNecesario: 1000,
        urlImg: "img/gato.jpg"
    },
    {
        id: 2,
        nombre: "Tonia",
        descripcion: "Necesita ayuda por que si no se muere :(((",
        donado: 100,
        fondoNecesario: 1000,
        urlImg: "img/gato.jpg"
    },
    {
        id: 1,
        nombre: "Tonia",
        descripcion: "Necesita ayuda por que si no se muere :(((",
        donado: 1000,
        fondoNecesario: 1000,
        urlImg: "img/gato.jpg"
    }
]);
const progressBarWidth = ref("0%")
function calculateProgress(dinero_necesario:number,dinero_alcanzado:number) {
    const total = dinero_alcanzado * 100 / dinero_necesario
    progressBarWidth.value = total as unknown as string + '%'
}
calculateProgress(infoDonacion.value.dinero_necesario,infoDonacion.value.dinero_alcanzado)
onMounted(async () => {
    
});
</script>
<style scoped lang="scss">
.main-wrapper {
    max-width: 1280px;
    padding: 0px 20px;
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