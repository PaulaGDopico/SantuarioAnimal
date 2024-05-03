<template>
  <ion-content class="ion-padding">
    <ion-button expand="block" @click="setOpen(true)">Open</ion-button>

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
        <p v-if="props.params.datosFila">
          <ion-input label="Nombre" label-placement="floating" fill="solid" placeholder="Introduce nombre"
            :value=props.params.datosFila.nombre>
          </ion-input>
          <ion-input label="Nombre Afiliado" label-placement="floating" fill="solid"
            placeholder="Introduce del Afiliado" :value=props.params.datosFila.nombre>
          </ion-input>
          <ion-input label="Raza" label-placement="floating" fill="solid" placeholder="Introduce la raza"
            :value=props.params.datosFila.raza>
          </ion-input>
          <ion-list>
            <ion-item>
              <ion-select aria-label="Estado Animal" :value="props.params.datosFila.estado">
                <ion-select-option value="sin-estado">Sin estado</ion-select-option>
                <ion-select-option value="casos-especiales">Casos Especiales</ion-select-option>
                <ion-select-option value="adopcion-urgente">Adopción Urgente</ion-select-option>
                <ion-select-option value="apadrinado">Apadrinado</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item>
              <ion-select aria-label="Sexo" :value="props.params.datosFila.sexo">
                <ion-select-option value="Macho">Macho</ion-select-option>
                <ion-select-option value="Hembra">Hembra</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item>
              <ion-select aria-label="Sexo" :value="props.params.datosFila.tipo">
                <ion-select-option value="Perro">Perro</ion-select-option>
                <ion-select-option value="Gato">Gato</ion-select-option>
              </ion-select>
            </ion-item>
            <input type="date" name="" id="">
            <input type="date" name="" id="">
          </ion-list>
        </p>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle, IonDatetime, IonItem, IonSelect, IonSelectOption, IonList, IonInput, IonGrid, IonRow, IonCol } from '@ionic/vue';
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