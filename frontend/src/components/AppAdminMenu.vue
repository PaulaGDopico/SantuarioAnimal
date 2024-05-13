<template>
  <ion-page>
    <ion-content>
      <div class="desktop-menu">
        <ion-tabs>
          <ion-header>
            <div class="header-logo">
              <img
                  alt="Logo santuario animal"
                  src="/img/logo.png"/>
              <h1>Santuario Animal</h1>
            </div>
          </ion-header>
          <ion-tab-bar slot="top" color="primary">
            <ion-tab-button tab="gestion" @click="$router.push({name:'gestion'})">
              <ion-icon :icon="homeOutline" :name="homeOutline"/>
              <ion-label>Gestión</ion-label>
            </ion-tab-button>

            <ion-tab-button
                tab="gestion-animales"
                @click="$router.push({name:'gestionAnimales'})">
              <ion-icon
                  :icon="heartOutline"
                  :name="heartOutline"/>
              <ion-label>Gestión Animales</ion-label>
            </ion-tab-button>

            <ion-tab-button
                tab="donaciones"
                @click="$router.push({name:'gestionDonaciones'})">
              <ion-icon
                  :icon="thumbsUpOutline"
                  :name="thumbsUpOutline"/>
              <ion-label>Gestión Donaciones</ion-label>
            </ion-tab-button>

            <ion-tab-button
                tab="gestion-notificaciones"
                @click="$router.push({name:'gestionNotificaciones'})">
              <ion-icon :icon="pawOutline" :name="pawOutline"/>
              <ion-label>Gestión Notificaciones</ion-label>
            </ion-tab-button>

            <ion-tab-button
                tab="registrar-administradores"
                @click="$router.push({name:'registrarAdministradores'})">
              <ion-icon
                  :icon="chatbubblesOutline"
                  :name="chatbubblesOutline"/>
              <ion-label>Registrar Administradores</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="cerrar-sesion" @click="logout">
              <ion-icon
                  :icon="closeCircleOutline"
                  :name="closeCircleOutline"/>
              <ion-label>Cerrar sesión</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
          <ion-router-outlet></ion-router-outlet>
        </ion-tabs>
      </div>

      <div class="mobile-menu">
        <ion-menu content-id="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-title>¿A que página quieres ir?</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding menu-buttons">
            <ion-item router-link="/gestion">
              <ion-icon
                  slot="start"
                  :icon="homeOutline"
                  :name="homeOutline"/>
              <ion-label> Gestión</ion-label>
            </ion-item>
            <ion-item router-link="/gestionAnimales">
              <ion-icon
                  slot="start"
                  :icon="pawOutline"
                  :name="pawOutline"/>
              <ion-label> Gestión Animales</ion-label>
            </ion-item>

            <ion-item router-link="/gestionDonaciones">
              <ion-icon
                  slot="start"
                  :icon="heartOutline"
                  :name="heartOutline"/>
              <ion-label>Gestión Donaciones</ion-label>
            </ion-item>
            <ion-item router-link="/gestionNotificaciones">
              <ion-icon
                  slot="start"
                  :icon="heartOutline"
                  :name="heartOutline"/>
              <ion-label> Gestión notificaciones</ion-label>
            </ion-item>
            <ion-item router-link="/registrarAdministradores">
              <ion-icon
                  slot="start"
                  :icon="chatbubblesOutline"
                  :name="chatbubblesOutline"/>
              <ion-label> Registrar administradores</ion-label>
            </ion-item>
            <ion-item @click="logout">
              <ion-icon
                  slot="start"
                  :icon="closeCircleOutline"
                  :name="closeCircleOutline"/>
              <ion-label>Cerrar sesión</ion-label>
            </ion-item>
          </ion-content>
        </ion-menu>
        <ion-page id="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <div class="header-logo">
                <img
                    alt="Logo Santuario Animal"
                    src="/img/logo.png"/>
                <ion-title> Santuario Animal</ion-title>
              </div>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-router-outlet></ion-router-outlet>
          </ion-content>
        </ion-page>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import {
  chatbubblesOutline,
  closeCircleOutline,
  heartOutline,
  homeOutline,
  pawOutline,
  thumbsUpOutline,
} from "ionicons/icons";

import {logout} from "@/services/auth";
</script>

<style lang="scss">
.header-logo {
  display: flex;
  justify-content: center;

  img {
    width: 4rem;
    margin: 0.3rem;
  }
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}

@media (min-width: 768px) {
  .desktop-menu {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
