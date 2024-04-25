<template>
    <ion-button @click="setOpenSecond(true)">Edit</ion-button>
    <!-- MODAL MODIFICAR -->
    <ion-modal :is-open="isOpenSecond">
        <ion-header>
            <ion-toolbar>
                <ion-title>Modal</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="setOpenSecond(false)">Close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
                reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
                Eaque,
                dicta.
            </p>
        </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';

const isOpenSecond = ref(false);
const setOpenSecond = (open: boolean) => {
    isOpenSecond.value = open
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAa')
};

</script>