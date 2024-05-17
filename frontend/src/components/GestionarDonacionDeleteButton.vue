<template>
  <ion-button @click="deleteDonacionConfirmar(props.params.datosFila)">
    <ion-icon :icon="trash" :name="trash"></ion-icon>
  </ion-button>
</template>
<script lang="ts" setup>

import {IonButton, IonIcon} from '@ionic/vue';
import {trash} from "ionicons/icons";
import {deleteDonacion} from "@/services/donacion";
import {inject} from "vue";

const props = defineProps<{
  params: {
    datosFila: any;
  };
}>();

const recargarDatos = inject<() => Promise<void>>('recargarDatos');

async function deleteDonacionConfirmar(params: any) {
  const confirmation = window.confirm(`¿Estás seguro de que deseas eliminar a ${params.titulo}?`);
  if (confirmation) {
    await deleteDonacion(params.id);
    if (recargarDatos) {
      await recargarDatos();
    }
  } else {
    console.log(params);
    console.log("Eliminación cancelada.");
  }
}
</script>
<style lang="scss" scoped>
</style>