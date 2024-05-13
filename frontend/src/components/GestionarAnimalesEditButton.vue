<template>
    <ion-content>
        <ion-button @click="setOpen(true)"
            ><ion-icon :icon="createOutline" :name="createOutline"></ion-icon
        ></ion-button>

        <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
            <ion-header>
                <ion-toolbar>
                    <ion-title>FORMULARI MODIFICAR ANIMAL</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="setOpen(false)">Close</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div v-if="props.params.datosFila">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    label="Nombre Animal"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce nombre"
                                    :value="props.params.datosFila.nombre">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    label="Nombre Afiliado"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce nombre"
                                    :value="props.params.datosFila.afiliado">
                                </ion-input>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    label="Raza"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce la raza"
                                    :value="props.params.datosFila.raza">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Sexo"
                                            :value="
                                                props.params.datosFila.tipo
                                            ">
                                            <ion-select-option value="PERRO"
                                                >Perro</ion-select-option
                                            >
                                            <ion-select-option value="GATO"
                                                >Gato</ion-select-option
                                            >
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Sexo"
                                            :value="
                                                props.params.datosFila.sexo
                                            ">
                                            <ion-select-option value="MACHO"
                                                >Macho</ion-select-option
                                            >
                                            <ion-select-option value="HEMBRA"
                                                >Hembra</ion-select-option
                                            >
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col> </ion-col>
                            <ion-col> </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    type="number"
                                    label="Habitación"
                                    label-placement="floating"
                                    fill="solid"
                                    max="20"
                                    min="1"
                                    :value="
                                        props.params.datosFila.habitacion
                                    "></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    type="number"
                                    label="Peso"
                                    label-placement="floating"
                                    fill="solid"
                                    :value="
                                        props.params.datosFila.peso
                                    "></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Altura"
                                            :value="
                                                props.params.datosFila.altura
                                            ">
                                            <ion-select-option
                                                value="muy-grande"
                                                >Muy Grande</ion-select-option
                                            >
                                            <ion-select-option value="grande"
                                                >Grande</ion-select-option
                                            >
                                            <ion-select-option value="mediano"
                                                >Mediano</ion-select-option
                                            >
                                            <ion-select-option value="pequeño"
                                                >Pequeño</ion-select-option
                                            >
                                            <ion-select-option
                                                value="muy-pequeño"
                                                >Muy Pequeño</ion-select-option
                                            >
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Estado Animal"
                                            :value="
                                                props.params.datosFila.estado
                                            ">
                                            <ion-select-option
                                                value="sin-estado"
                                                >Sin estado</ion-select-option
                                            >
                                            <ion-select-option
                                                value="casos-especiales"
                                                >Casos
                                                Especiales</ion-select-option
                                            >
                                            <ion-select-option
                                                value="adopcion-urgente"
                                                >Adopción
                                                Urgente</ion-select-option
                                            >
                                            <ion-select-option
                                                value="apadrinado"
                                                >Apadrinado</ion-select-option
                                            >
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    type="number"
                                    label="Donativos Necesarios"
                                    label-placement="floating"
                                    fill="solid"
                                    :value="props.params.datosFila.donaciones_recibidas"
                                    min="1"></ion-input>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <p>Fecha de nacimiento</p>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    id="fechaNacimiento"
                                    class="inputDate"
                                    :value="
                                        props.params.datosFila.fechaNacimiento
                                    " />
                            </ion-col>
                            <ion-col>
                                <p>Fecha de INgreso</p>
                                <input
                                    type="date"
                                    name="fechaIngreso"
                                    id="fechaIngreso"
                                    class="inputDate"
                                    :value="
                                        props.params.datosFila.fechaIngreso
                                    " />
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-textarea
                                    label="Descripción"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce la descripción del animal"></ion-textarea>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row class="ion-justify-content-end">
                            <ion-col size="3">
                                <ion-button @click="setOpen(false)"
                                    >Cancelar</ion-button
                                >
                            </ion-col>
                            <ion-col size="3">
                                <ion-button>Enviar</ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-else>
                    <p>Error al cargar los datos del Animal.</p>
                </div>
            </ion-content>
        </ion-modal>
    </ion-content>
</template>

<script lang="ts" setup>
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonTextarea,
    IonIcon,
} from "@ionic/vue";
import { createOutline } from "ionicons/icons";
import { ref } from "vue";
// Definimos las props para recibir los datos de la fila
const props = defineProps<{
    params: {
        datosFila: any;
    };
}>();

console.log(props.params.datosFila)
const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);
</script>
