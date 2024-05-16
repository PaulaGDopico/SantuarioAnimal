<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="2">
            <ion-button @click="() => router.push('/gestion')">
              Volver Atrás
            </ion-button>
          </ion-col>
          <ion-col class="ion-text-center" size="">
            <h1>Gestionar Donaciones</h1>
          </ion-col>
          <ion-col size="2">
            <div class="d-flex ion-justify-content-end">
              <ion-button @click="setOpen(true)">
                Añadir donación
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ag-grid-vue :animateRows="true"
                         :columnDefs="columnDefs"
                         :editType="'fullRow'"
                         :pagination="true"
                         :rowData="rowData"
                         :suppressClickEdit="true"
                         class="ag-theme-quartz"
                         style="height: 500px">
            </ag-grid-vue>
          </ion-col>

        </ion-row>
        <ion-row>
          <app-footer></app-footer>
        </ion-row>
      </ion-grid>
      <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
        <ion-header>
          <ion-toolbar>
            <ion-title>AÑADIR DONACIÓN</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen(false)">Cerrar</ion-button>
              <ion-button>Enviar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-input label="Título" type="text"></ion-input>
              </ion-col>
              <ion-col size="12">
                <ion-textarea label="Contexto"></ion-textarea>
              </ion-col>
              <ion-col size="12">
                <ion-row>
                  <ion-col size="12" size-sm="2"><label>Imagen</label></ion-col>
                  <ion-col><input id="image" name="image" type="file"></ion-col>
                </ion-row>
              </ion-col>
              <ion-col size="12">
                <ion-input label="Dinero necesario" type="number"></ion-input>
              </ion-col>
              <!--              Fecha de inicio usar Date.now-->
              <ion-col size="12">
                <ion-select aria-label="Animal" interface="popover" placeholder="Seleccionar Animal">
                  <ion-select-option>Animal 1</ion-select-option>
                </ion-select>
              </ion-col>
              <ion-col size="12">
                <ion-select aria-label="Afiliado" interface="popover" placeholder="Seleccionar Afiliado">
                  <ion-select-option>Afiliado 1</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonModal,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import {AgGridVue} from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import AppFooter from "@/components/AppFooter.vue";
import {onMounted, ref} from "vue";
import router from "@/router";
import {getDonaciones} from "@/services/donacion";

//Modal
const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

//Tabla
const columnDefs = ref([
  {headerName: "Título", field: "titulo", sorteable: true, filter: true},
  {headerName: "Contexto", field: "contexto", sorteable: true, filter: true},
  {headerName: "Imagen", field: "img", sorteable: true, filter: true},
  {headerName: "Dinero necesario", field: "dinero_necesario", sorteable: true, filter: true},
  {headerName: "Dinero alcanzado", field: "dinero_alcanzado", sorteable: true, filter: true},
  {headerName: "Fecha de inicio", field: "fecha_inicio", sorteable: true, filter: true},
  {headerName: "Animal", field: "animalId", sorteable: true, filter: true},
  {headerName: "Afiliado", field: "afiliadoId", sorteable: true, filter: true},

])
const rowData: any = ref([])


onMounted(async () => {
  try {
    rowData.value = await getDonaciones()
  } catch (error) {
    console.error("Error al obtener las donaciones")
  }
})

</script>
<style lang="scss" scoped>
.container {
  margin: 5vh 10vw;
}
</style>
