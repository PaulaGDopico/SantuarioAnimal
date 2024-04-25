<template>
  <ion-page>
    <ion-content>
      <div class="main-wrapper">
        <ion-grid>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col>
              <ion-button>
                <RouterLink :to="{
                  name: 'InicioSesion',
                }">Volver Atras</RouterLink>
              </ion-button>
            </ion-col>
            <ion-col>
              <h1>Gestionar Animales de la Protectora</h1>
            </ion-col>
            <ion-col class="ion-text-end">
              <ion-button @click="setOpen(true)">Añadir Animal</ion-button> <!-- The AG Grid component -->
            </ion-col>
          </ion-row>
        </ion-grid>
        <ag-grid-vue :rowData="rowData" :columnDefs="columnDefs" style="height: 500px" class="ag-theme-quartz">
        </ag-grid-vue>
        <!-- MODAL MODIFICAR -->
        <ion-modal :is-open="isOpen">
          <ion-header>
            <ion-toolbar>
              <ion-title>Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="setOpen(false)">Close</ion-button>
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
      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonItem,
  IonModal,
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonPage,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AgGridVue,
    IonContent,
    IonItem,
    IonModal,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonPage,
    AppFooter,
    IonGrid,
    IonRow,
    IonCol
  },
  data() {
    return {
      columnDefs: [
        { headerName: 'Nombre', field: 'nombre', sortable: true, filter: true },
        { headerName: 'Tipo', field: 'tipo', sortable: true, filter: true },
        { headerName: 'Sexo', field: 'sexo', sortable: true, filter: true },
        { headerName: 'Raza', field: 'raza', sortable: true, filter: true },
        { headerName: 'Estado', field: 'estado', sortable: true, filter: true },
        { headerName: 'Imagen', cellRenderer: imageRenderer },
        { headerName: 'Acción', cellRenderer: actionRenderer } // Cambiado de 'cellRendererFramework' a 'cellRenderer'
      ],
      rowData: [
        { nombre: 'Roy', tipo: 'Perro', sexo: 'Macho', raza: 'Bulldog', estado: 'casos-especiales', imagen: 'pexels-snapwire-46024.jpg' },
        { nombre: 'Marin', tipo: 'Gato', sexo: 'Hembra', raza: 'Persa', estado: 'sin-estado', imagen: 'pexels-snapwire-46024.jpg' },
        { nombre: 'Gafe', tipo: 'Gato', sexo: 'Macho', raza: 'Europeo', estado: 'adopcion-urgente', imagen: 'pexels-snapwire-46024.jpg' },
        { nombre: 'Tristepin', tipo: 'Perro', sexo: 'Hembra', raza: 'Chihuahua', estado: 'apadrinado', imagen: 'pexels-snapwire-46024.jpg' }
      ]
    };
  },
  setup() {
    const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');
    const modal = ref();
    const input = ref();

    const cancel = () => modal.value.$el.dismiss(null, 'cancel');

    const confirm = () => {
      const name = input.value.$el.value;
      modal.value.$el.dismiss(name, 'confirm');
    };

    const onWillDismiss = (ev: any) => {
      if (ev.detail.role === 'confirm') {
        message.value = `Hello, ${ev.detail.data}!`;
      }
    };
    const isOpen = ref(false);
    const isOpenSecond = ref(false);

    const setOpen = (open: boolean) => (isOpen.value = open);
    const setOpenSecond = (open: boolean) => (isOpen.value = open);
    return {
      message,
      modal,
      input,
      cancel,
      confirm,
      onWillDismiss,
      isOpen,
      setOpen,
      isOpenSecond,
      setOpenSecond
    };
  }
};


// Función para renderizar el contenido de la celda como botones
function actionRenderer(params:any) {
  const wrapper = document.createElement('div');

  // Botón 1
  const button1 = document.createElement('ion-button');
  button1.setAttribute("click", "setOpenSecond(false)")
  button1.innerHTML = 'Edit';
  wrapper.appendChild(button1);

  // Botón 2
  const button2 = document.createElement('ion-button');
  button2.setAttribute("id", "open-modal")
  button2.innerHTML = 'Del';
  button2.addEventListener('click', () => {
    const confirmation = confirm(`¿Estás seguro de que deseas eliminar a ${params.data.nombre}?`);
    console.log(params.data.nombre)
    if (confirmation) {
      // La acción de eliminar se realizará si se selecciona "Aceptar"
      console.log("Eliminando el elemento...");
    } else {
      // No se realiza ninguna acción si se selecciona "Cancelar"
      console.log("Eliminación cancelada.");
    }
  });
  wrapper.appendChild(button2);

  return wrapper;
}

// Función para renderizar el contenido de la celda como imágenes
function imageRenderer(params: any) {
  const wrapper = document.createElement('div');

  // Imagen
  const image = document.createElement('img');
  image.src += '/img/' + params.data.imagen; // URL de la imagen // Texto alternativo de la imagen
  image.style.width = '100px'; // Estilo opcional
  image.style.height = '100px'; // Estilo opcional
  wrapper.appendChild(image);

  return wrapper;
}
</script>
<style scoped lang="scss">
h1 {
  text-align: center;
  margin: 0px;
}

a {
  color: white;
  text-decoration: none;
}
</style>