<template>
        <ion-button @click="setOpen(true)">Editar</ion-button>

        <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
            <ion-header>
                <ion-toolbar>
                    <ion-title>FORMULARI MODIFICAR ANIMAL</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="setOpen(false)">Cerrar</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <!-- Aquí puedes mostrar los datos de la fila -->
                <div v-if="props.params.datosFila">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Nombre Animal" label-placement="floating" fill="solid"
                                    placeholder="Introduce nombre" :value=props.params.datosFila.nombre>
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input label="Nombre Afiliado" label-placement="floating" fill="solid"
                                    placeholder="Introduce nombre" :value=props.params.datosFila.afiliado>
                                </ion-input>
                            </ion-col>

                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Raza" label-placement="floating" fill="solid"
                                    placeholder="Introduce la raza" :value=props.params.datosFila.raza>
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Sexo" :value="props.params.datosFila.tipo">
                                            <ion-select-option value="Perro">Perro</ion-select-option>
                                            <ion-select-option value="Gato">Gato</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Sexo" :value="props.params.datosFila.sexo">
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
                                    max="20" min="1" :value=props.params.datosFila.habitacion></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input type="number" label="Peso" label-placement="floating" fill="solid"
                                    :value=props.params.datosFila.peso></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select aria-label="Altura" :value="props.params.datosFila.altura">
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
                                        <ion-select aria-label="Estado Animal" :value="props.params.datosFila.estado">
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
                            <ion-col>
                                <ion-input type="number" label="Donativos Necesarios" label-placement="floating"
                                    fill="solid" :value=props.params.datosFila.donativo min="1"></ion-input>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <input type="date" name="fechaNacimiento" id="fechaNacimiento" class="inputDate"
                                    :value="props.params.datosFila.fechaNacimiento">
                            </ion-col>
                            <ion-col>
                                <input type="date" name="fechaIngreso" id="fechaIngreso" class="inputDate"
                                    :value="props.params.datosFila.fechaIngreso">
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
                    </ion-grid>
                </div>
                <div v-else>
                    <p>Error al cargar los datos del Animal.</p>
                </div>
            </ion-content>
        </ion-modal>
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
    IonTextarea
} from '@ionic/vue';
import { ref } from 'vue';
// Definimos las props para recibir los datos de la fila
const props = defineProps<{
    params: {
        datosFila: any;
    };
}>();
const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);
</script>
<style scoped lang="scss">
input[type="date"] {
    width: 100%;
    border: 1px var(--ion-color-primary) solid;
    border-radius: 5px;
    padding: 10px;
}
</style>