<template>
    <ion-content>
        <ion-button @click="setOpen(true)"></ion-button>

        <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
            <ion-header>
                <ion-toolbar>
                    <ion-title>FORMULARI AÑADIR ANIMAL</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="setOpen(false)">Close</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Nombre Animal" label-placement="floating" fill="solid"
                                    placeholder="Introduce nombre">
                                </ion-input>
                            </ion-col>
                            <!-- <ion-col>
                                <ion-input label="Nombre Afiliado" label-placement="floating" fill="solid"
                                    placeholder="Introduce nombre">
                                </ion-input>
                            </ion-col> -->

                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Raza" label-placement="floating" fill="solid"
                                    placeholder="Introduce la raza">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Sexo">
                                            <ion-select-option value="Perro">Perro</ion-select-option>
                                            <ion-select-option value="Gato">Gato</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Sexo">
                                            <ion-select-option value="Macho">Macho</ion-select-option>
                                            <ion-select-option value="Hembra">Hembra</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>

                            </ion-col>
                            <ion-col>

                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input type="number" label="Habitación" label-placement="floating" fill="solid"
                                    max="20" min="1"></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input type="number" label="Peso" label-placement="floating"
                                    fill="solid"></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Altura">
                                            <ion-select-option value="muy-grande">Muy Grande</ion-select-option>
                                            <ion-select-option value="grande">Grande</ion-select-option>
                                            <ion-select-option value="mediano">Mediano</ion-select-option>
                                            <ion-select-option value="pequeño">Pequeño</ion-select-option>
                                            <ion-select-option value="muy-pequeño">Muy Pequeño</ion-select-option>
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
                                        <ion-select aria-label="Estado Animal">
                                            <ion-select-option value="sin-estado">Sin estado</ion-select-option>
                                            <ion-select-option value="casos-especiales">Casos
                                                Especiales</ion-select-option>
                                            <ion-select-option value="adopcion-urgente">Adopción
                                                Urgente</ion-select-option>
                                            <ion-select-option value="apadrinado">Apadrinado</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <!-- <ion-col>
                                <ion-input type="number" label="Donativos Necesarios" label-placement="floating"
                                    fill="solid" min="1"></ion-input>
                            </ion-col> -->
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <input type="date" name="fechaNacimiento" id="fechaNacimiento" class="inputDate">
                            </ion-col>
                            <ion-col>
                                <input type="date" name="fechaIngreso" id="fechaIngreso" class="inputDate">
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-textarea label="Descripción" label-placement="floating" fill="solid"
                                    placeholder="Introduce la descripción del animal"></ion-textarea>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input type="file" @change="onFileChange" accept="image/*"></ion-input>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
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
    IonDatetime,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonTextarea,
} from '@ionic/vue';
import { ref } from 'vue';

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);

data() {
  return {
    animalData: {
      nombre: '',
      nombreAfiliado: '',
      raza: '',
      genero: '',
      habitacion: null,
      peso: null,
      tamaño: '',
      estado: '',
      donativosNecesarios: null,
      fechaNacimiento: '',
      fechaIngreso: '',
      descripcion: '',
      foto: null // Esta variable almacenará la foto del animal
    },
    isOpen: false
  };
}


</script>