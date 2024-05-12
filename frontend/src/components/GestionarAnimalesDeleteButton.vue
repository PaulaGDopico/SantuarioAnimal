<template>
    <ion-button @click="deleteAnimalConfirmar(props.params.datosFila)"><ion-icon :icon="trash" :name="trash"></ion-icon></ion-button>
</template>
<script setup lang="ts">
import { deleteAnimal} from "@/services/animal";
import { defineProps, defineEmits} from "vue";

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

const emits = defineEmits(["deleteRow"])

async function deleteAnimalConfirmar(params:any) {
    const confirmation = window.confirm(`¿Estás seguro de que deseas eliminar a ${params.nombre}?`);
    if (confirmation) {
       deleteAnimal(params.id)
       emits("deleteRow",params.id)
    } else {
      console.log("Eliminación cancelada.");
    }
}
</script>
<style scoped lang="scss">
</style>