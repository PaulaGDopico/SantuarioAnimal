<template>
  <ion-page>
    <ion-content>
      <div class="desktop-menu">
        <ion-tabs>
          <ion-header>
            <div class="header-logo">
              <ion-item router-link="/home">
                <img
                    alt="Logo santuario animal"
                    src="/img/logo.png"/>
                <h1>Santuario Animal</h1>
              </ion-item>
            </div>
          </ion-header>
          <ion-tab-bar slot="top" color="primary">
            <ion-tab-button href="/home" tab="home">
              <ion-icon :icon="homeOutline" :name="homeOutline"/>
              <ion-label>Home</ion-label>
            </ion-tab-button>

            <ion-tab-button href="/adopta" tab="adopta">
              <ion-icon
                  :icon="heartOutline"
                  :name="heartOutline"/>
              <ion-label>Adopta</ion-label>
            </ion-tab-button>

            <ion-tab-button
                id="voluntario-popover"
                tab="voluntario">
              <ion-icon
                  :icon="thumbsUpOutline"
                  :name="thumbsUpOutline"/>
              <ion-label>Voluntarios</ion-label>
            </ion-tab-button>
            <ion-popover
                trigger="voluntario-popover"
                triggerAction="click">
              <ion-content class="">
                <ion-tab-bar color="primary">
                  <ion-tab-button
                      href="/voluntariado"
                      tab="voluntariado">
                    <ion-icon
                        :icon="handLeftOutline"
                        :name="handLeftOutline"/>
                    <ion-label>Voluntario</ion-label>
                  </ion-tab-button>
                  <ion-tab-button
                      href="/donaciones"
                      tab="donaciones">
                    <ion-icon
                        :icon="heartCircleOutline"
                        :name="heartCircleOutline"/>
                    <ion-label>Donaciones</ion-label>
                  </ion-tab-button>
                </ion-tab-bar>
              </ion-content>
            </ion-popover>

            <ion-tab-button
                href="/sobre-nosotros"
                tab="sobre-nosotros">
              <ion-icon :icon="pawOutline" :name="pawOutline"/>
              <ion-label>Sobre nosotros</ion-label>
            </ion-tab-button>
            <ion-tab-button href="/contactanos" tab="contactanos">
              <ion-icon
                  :icon="chatbubblesOutline"
                  :name="chatbubblesOutline"/>
              <ion-label>Contactanos</ion-label>
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
            <ion-item router-link="/">
              <ion-icon
                  slot="start"
                  :icon="homeOutline"
                  :name="homeOutline"/>
              <ion-label> Inicio</ion-label>
            </ion-item>
            <ion-item router-link="/adopta">
              <ion-icon
                  slot="start"
                  :icon="heartOutline"
                  :name="heartOutline"/>
              <ion-label> Adopta</ion-label>
            </ion-item>

            <menu-dropdown-item></menu-dropdown-item>

            <ion-item router-link="/sobre-nosotros">
              <ion-icon
                  slot="start"
                  :icon="pawOutline"
                  :name="pawOutline"/>
              <ion-label> Sobre nosotros</ion-label>
            </ion-item>
            <ion-item router-link="/contactanos">
              <ion-icon
                  slot="start"
                  :icon="chatbubblesOutline"
                  :name="chatbubblesOutline"/>
              <ion-label> Contactanos</ion-label>
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
  IonPopover,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

import {
  chatbubblesOutline,
  handLeftOutline,
  heartCircleOutline,
  heartOutline,
  homeOutline,
  pawOutline,
  thumbsUpOutline,
} from "ionicons/icons";

import MenuDropdownItem from "./MenuDropdownItem.vue";
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
