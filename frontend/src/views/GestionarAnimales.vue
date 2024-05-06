<template>
  <ion-page>
    <ion-content>
      <div class="main-wrapper">
        <ion-grid>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col>
              <ion-button>
                <RouterLink :to="{ name: 'InicioSesion' }">Volver Atras</RouterLink>
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
        <ag-grid-vue style="height: 500px" class="ag-theme-quartz" :rowData="rowData" :columnDefs="columnDefs"
          :editType="'fullRow'" :animateRows="true" :suppressClickEdit="true">
        </ag-grid-vue>
        <!-- MODAL CREAR -->
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
              Formulari per afegir nou animal
            </p>
          </ion-content>
        </ion-modal>
      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
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
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import AppFooter from '@/components/AppFooter.vue';
import GestionarAnimalesEditButton from "@/components/GestionarAnimalesEditButton.vue";

// BOTONES MODAL
const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

const columnDefs = ref([
  { headerName: 'Nombre', field: 'nombre', sortable: true, filter: true },
  { headerName: 'Tipo', field: 'tipo', sortable: true, filter: true },
  { headerName: 'Sexo', field: 'sexo', sortable: true, filter: true },
  { headerName: 'Raza', field: 'raza', sortable: true, filter: true },
  { headerName: 'Estado', field: 'estado', sortable: true, filter: true },
  { headerName: 'Imagen', cellRenderer: imageRenderer },
  {
    headerName: 'Editar',
    cellRenderer: GestionarAnimalesEditButton,
    cellRendererParams: (params: any) => ({
      datosFila: params.data
    })
  },
  {
    headerName: 'Eliminar',
    cellRenderer: deleteAnimal,
  }
]);

const rowData = ref([
  { id: 0, nombre: 'Roy', tipo: 'Perro', sexo: 'Macho', raza: 'Bulldog', estado: 'casos-especiales', peso: 5,altura: "muy-pequeño",donativo: 0, afiliado: "",habitacion:3, fechaNacimiento:'2024-03-05',fechaIngreso:'2020-05-03', imagen: 'pexels-snapwire-46024.jpg' },
  { nombre: 'Marin', tipo: 'Gato', sexo: 'Hembra', raza: 'Persa', estado: 'sin-estado', imagen: 'pexels-snapwire-46024.jpg' },
  { nombre: 'Gafe', tipo: 'Gato', sexo: 'Macho', raza: 'Europeo', estado: 'adopcion-urgente', imagen: 'pexels-snapwire-46024.jpg' },
  { nombre: 'Tristepin', tipo: 'Perro', sexo: 'Hembra', raza: 'Chihuahua', estado: 'apadrinado', imagen: 'perro.jpg'}
]);

function deleteAnimal(params: any) {
  const wrapper = document.createElement('div');
  const button2 = document.createElement('ion-button');
  button2.classList.add('buttonDelete')
  button2.innerHTML = 'Eliminar';
  button2.addEventListener('click', () => {
    const confirmation = window.confirm(`¿Estás seguro de que deseas eliminar a ${params.data.nombre}?`);
    console.log(params.data.nombre)
    if (confirmation) {
      console.log("Eliminando el elemento...");
    } else {
      console.log("Eliminación cancelada.");
    }
  });
  wrapper.appendChild(button2);
  return wrapper;
}

function imageRenderer(params: any) {
  const wrapper = document.createElement('div');

  const image = document.createElement('img');
  image.src += '/img/' + params.data.imagen;
  image.style.width = '100px';
  image.style.height = '100px';
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
.buttonDelete {
  background-color: rgb(145, 30, 30);
  color: white;
}
</style>