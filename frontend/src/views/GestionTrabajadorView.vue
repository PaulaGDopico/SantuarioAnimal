<template>
    <ion-page>
        <ion-content>
            <div class="main">
                <section class="informacion">
                    <h1>Que desea hacer?</h1>
                    <section class="gestion">
                        <router-link :to="{ name: 'gestionAnimales' }">
                            <div class="administrarAnimales">
                                <img
                                    src="/img/Rectangle 52.png"
                                    alt="administrarAnimales" />
                                <div class="letreroAnimales">
                                    <p>Administrar animales</p>
                                </div>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'gestionNotificaciones' }"
                            ><div class="gestionNotificaciones">
                                <img
                                    src="/img/Rectangle 53.png"
                                    alt="gestionNotificacines" />
                                <div class="letreroNotificaciones">
                                    <p>Gestione las notificaciones</p>
                                </div>
                            </div></router-link
                        >
                        <router-link :to="{ name: 'gestionDonaciones' }">
                            <div class="gestionDonaciones">
                                <img
                                    src="/img/Rectangle 54.png"
                                    alt="gestionDonativos" />
                                <div class="letreroDonaciones">
                                    <p>Gestione las donaciones</p>
                                </div>
                            </div>
                        </router-link>
                    </section>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .informacion {
        width: 80%;
        display: flex;
        flex-direction: column;
        h1 {
            margin-top: 60px;
            margin-bottom: 40px;
        }
        .gestion {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .administrarAnimales,
            .gestionNotificaciones,
            .gestionDonaciones {
                cursor: pointer;
            }
            .letreroAnimales,
            .letreroNotificaciones,
            .letreroDonaciones {
                width: 100%;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                position: relative;
                top: -75px;
                color: white;
            }
            .administrarAnimales:hover,
            .gestionNotificaciones:hover,
            .gestionDonaciones:hover {
                transform: scale(1.05);
                transition: transform 0.3s ease;
            }
            .letreroAnimales {
                background-color: rgba(255, 145, 77, 0.83);
            }
            .letreroNotificaciones {
                background-color: rgba(251, 77, 255, 0.83);
            }
            .letreroDonaciones {
                background-color: rgba(71, 209, 239, 0.83);
            }
        }
        margin-bottom: 80px;
    }
}
</style>
