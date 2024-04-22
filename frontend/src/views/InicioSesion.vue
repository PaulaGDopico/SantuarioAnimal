<template>
    <ion-page>
        <ion-content>
            <div class="main-wrapper">
                <section>
                    <form>
                        <div>

                        </div>
                        <ion-input label="Nombre" label-placement="floating" fill="solid"
                            placeholder="Introduce tu nombre"></ion-input>
                        <ion-input label="Apellidos" label-placement="floating" fill="solid"
                            placeholder="Introduce tus apellidos">
                        </ion-input>
                        <ion-button type="submit">Enviar mensaje</ion-button>
                    </form>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
import AppFooter from '@/components/AppFooter.vue';

</script>
<style scoped lang="scss">
.main-wrapper {
    background-image: url(/img/sesionBackground.png);
}
</style>