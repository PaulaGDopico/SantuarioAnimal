<template>
    <ion-page>
        <ion-content>
            <div class="content main-wrapper">
                <ion-grid class="justify-content-center infoAnimal">
                    <ion-row v-if="animal">
                        <ion-col size="12" size-sm="12" size-lg="4" class="datosTecnicos">
                            <img :src="API_FILE_URL + animal.img" alt="Foto de perro" class="w100" />
                            <ion-grid>
                                <ion-row>
                                    <ion-col size="6" size-sm="3" class="key">Animal</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                        animal?.raza
                    }}</ion-col>
                                    <ion-col size="6" size-sm="3" class="key">Estado</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.estado_adopcion
                        }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="6" size-sm="3" class="key">Sexo</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.sexo
                        }}</ion-col>
                                    <ion-col size="6" size-sm="3" class="key">Raza</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.raza
                        }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="6" size-sm="3" class="key">Peso</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.peso
                        }}</ion-col>
                                    <ion-col size="6" size-sm="3" class="key">Tamaño</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.tamanyo
                        }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="6" size-sm="3" class="key">Nacimiento</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.fecha_nacimiento
                        }}</ion-col>
                                    <ion-col size="6" size-sm="3" class="key">Entrada</ion-col>
                                    <ion-col size="6" size-sm="3">{{
                            animal?.fecha_ingreso
                        }}</ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-col>
                        <ion-col size="11" size-md="12" size-lg="7" class="w60 adoptaBotones">
                            <h1>{{ animal?.nombre }}</h1>
                            <p>{{ animal?.descripcion }}</p>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary" id="open-adopta-modal" @click="openAdoptaModal">
                                    Adopta a {{ animal?.nombre }}
                                </button>
                                <button class="btn btn-primary" id="open-apadrina-modal" @click="openApadrinaModal">
                                    Apadrina a {{ animal?.nombre }}
                                </button>
                                <RouterLink class="btn btn-secondary" :to="{ name: 'Voluntariado' }">Hazte Voluntario
                                </RouterLink>
                            </div>
                        </ion-col>
                    </ion-row>
                    <div v-else>
                        <h1>No existe ese animal</h1>
                    </div>
                </ion-grid>
                <section class="otrosAnimales">
                    <div class="d-flex align-items-center">
                        <div class="line"></div>
                        <h2>Otros animales de la misma categoria</h2>
                        <div class="line"></div>
                    </div>

                    <IonGrid class="cartasAnimal">
                        <ion-row class="justify-content-center">
                            <AppCartaAnimal v-for="animal in infoAnimal" :id="animal.id" :key="animal.nombre"
                                :animal="animal.tipo" :estado-adopcion="animal.estado_adopcion" :nombre="animal.nombre"
                                :raza="animal.raza" :urlImg="API_FILE_URL + animal.img" />
                        </ion-row>
                    </IonGrid>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { API_FILE_URL } from "@/middleware/secrets";
import InfoAnimalAdoptaModal from "@/components/InfoAnimalAdoptaModal.vue";
import InfoAnimalApadrinaModal from "@/components/InfoAnimalApadrinaModal.vue";
import AppFooter from "@/components/AppFooter.vue";

import {
    IonPage,
    IonContent,
    IonCol,
    IonGrid,
    IonRow,
    modalController,
} from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import { onMounted, ref } from "vue";

import { useRoute } from "vue-router";
import { cincoAnimales, getAnimal } from "@/services/animal";
import { Animal } from "@/types/Animal";
import { enviarMail } from "@/services/mail";
//import InfoAnimalAdoptaModal from "@/components/InfoAnimalAdoptaModal.vue";

const openAdoptaModal = async () => {
    const adoptaModal = await modalController.create({
        component: InfoAnimalAdoptaModal,
    });
    await adoptaModal.present();

    const { data, role } = await adoptaModal.onWillDismiss();

    if (role === "confirm") {
        await enviarMail(data, "Adopción", "notificacionessantuarioanimal@gmail.com");
    }
};

const openApadrinaModal = async () => {
    const apadrinaModal = await modalController.create({
        component: InfoAnimalApadrinaModal,
    });
    await apadrinaModal.present();

    const { data, role } = await apadrinaModal.onWillDismiss();

    if (role === "confirm") {
        await enviarMail(
            data,
            "Apadrinar",
            "notificacionessantuarioanimal@gmail.com"
        );
    }
};

const animal = ref<Animal | undefined>(undefined);
const infoAnimal = ref();

onMounted(async () => {
    const route = useRoute();
    const animalId = route.params.animal_id;
    animal.value = await getAnimal(animalId as string);
    infoAnimal.value = await cincoAnimales();
});

</script>

<style lang="scss" scoped>
.content {
    padding: 10px;
    display: block !important;

    .infoAnimal {
        .datosTecnicos {
            margin: 10px;

            img {
                max-height: 500px;
                object-fit: cover;
            }

            ion-row {
                border-bottom: 1px solid gray;

                .key {
                    font-weight: bold;
                }

                ion-col {
                    display: flex;
                    align-items: center;
                    height: 45px;
                }
            }
        }

        .adoptaBotones {
            margin: 20px;
        }

        h1,
        p {
            text-align: justify;
            white-space: pre-wrap;
        }
    }

    .otrosAnimales {
        margin-top: 50px;

        h2 {
            color: black;
            text-align: center;
            margin: 10px;
        }

        .line {
            height: 1px;
            background-color: black;
            width: 33%;
        }
    }
}
</style>
