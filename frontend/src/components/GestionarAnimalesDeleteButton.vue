<template>
    <ion-button @click="deleteAnimal(props.params.datosFila)"><ion-icon :icon="trash" :name="trash"></ion-icon></ion-button>
</template>
<script setup lang="ts">
import {
    IonButton,
    IonIcon
} from '@ionic/vue';
import { trash } from "ionicons/icons";

const props = defineProps<{
    params: {
        datosFila: any;
    };
}>();
function deleteAnimal(params:any) {
    const confirmation = window.confirm(`¿Estás seguro de que deseas eliminar a ${params.nombre}?`);
    console.log(params.data.nombre)
    if (confirmation) {
      console.log("Eliminando el elemento...");
    } else {
      console.log("Eliminación cancelada.");
    }
}
</script>
<style scoped lang="scss">
</style>