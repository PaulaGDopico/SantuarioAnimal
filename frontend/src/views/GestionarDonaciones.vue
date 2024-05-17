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
              <ion-button @click="addDonation()">Enviar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-input v-model="titulo" label="Título" label-placement="floating" type="text"></ion-input>
                <ion-text v-if="errors.titulo" color="danger">{{ errors.titulo }}</ion-text>
              </ion-col>
              <ion-col size="12">
                <ion-textarea v-model="contexto" label="Contexto" label-placement="floating"></ion-textarea>
                <ion-text v-if="errors.contexto" color="danger">{{ errors.contexto }}</ion-text>
              </ion-col>
              <ion-col size="12">
                <ion-row>
                  <ion-col size="12" size-sm="2"><label>Imagen</label></ion-col>
                  <ion-col><input id="image" name="image" type="file" v-on:change="subirImagen"></ion-col>
                </ion-row>
                <ion-text v-if="errors.image" color="danger">{{ errors.image }}</ion-text>
              </ion-col>
              <ion-col size="12">
                <ion-input v-model="dinero_necesario" label="Dinero necesario" label-placement="floating"
                           type="number"></ion-input>
                <ion-text v-if="errors.dinero_necesario" color="danger">{{ errors.dinero_necesario }}</ion-text>
              </ion-col>
              <ion-col size="12">
                <ion-select v-model="animal" aria-label="Animal" interface="popover" placeholder="Seleccionar Animal">
                  <ion-select-option v-for="animal in animales" :key="animal.id">
                    {{ animal.id }}.{{ animal.nombre }}
                  </ion-select-option>
                </ion-select>
                <ion-text v-if="errors.animal" color="danger">{{ errors.animal }}</ion-text>
              </ion-col>
              <ion-col size="12">
                <ion-select v-model="afiliado" aria-label="Afiliado" interface="popover"
                            placeholder="Seleccionar Afiliado">
                  <ion-select-option v-for="afiliado in afiliados" :key="afiliado.id">
                    {{ afiliado.id }}.{{ afiliado.nombre }}
                  </ion-select-option>
                </ion-select>
                <ion-text v-if="errors.afiliado" color="danger">{{ errors.afiliado }}</ion-text>
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
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import {AgGridVue} from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import AppFooter from "@/components/AppFooter.vue";
import {onMounted, provide, Ref, ref} from "vue";
import router from "@/router";
import {addDonacion, getDonaciones} from "@/services/donacion";
import {getAfiliados} from "@/services/afiliado";
import {getAllAnimales} from "@/services/animal";
import {Afiliado} from "@/types/Afiliado";
import {Animal} from "@/types/Animal";
import GestionarDonacionDeleteButton from "@/components/GestionarDonacionDeleteButton.vue";

// Modal
const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

// Tabla
const columnDefs = ref([
  {headerName: "Título", field: "titulo", sortable: true, filter: true},
  {headerName: "Contexto", field: "contexto", sortable: true, filter: true},
  {headerName: "Imagen", cellRenderer: imageRenderer},
  {headerName: "Dinero necesario", field: "dinero_necesario", sortable: true, filter: true},
  {headerName: "Dinero alcanzado", field: "dinero_alcanzado", sortable: true, filter: true},
  {headerName: "Fecha de inicio", field: "fecha_inicio", sortable: true, filter: true},
  {headerName: "Animal", field: "animalId", sortable: true, filter: true},
  {headerName: "Afiliado", field: "afiliadoId", sortable: true, filter: true},
  {
    headerName: "Eliminar",
    cellRenderer: GestionarDonacionDeleteButton,
    cellRendererParams: (params: any) => ({
      datosFila: params.data,
    }),

  },
])
const rowData: any = ref([])
const recargarDatos = async () => {
  try {
    rowData.value = await getDonaciones();
  } catch (error) {
    console.error("Error al obtener las donaciones", error);
  }
};
provide('recargarDatos', recargarDatos);


function imageRenderer(params: any) {
  const wrapper = document.createElement("div");

  const image = document.createElement("img");
  image.src += "http://localhost:3000/" + params.data.img;
  image.style.width = "100px";
  image.style.height = "100px";
  wrapper.appendChild(image);

  return wrapper;
}

// Datos de animales y afiliados
const afiliados: Ref<Array<Afiliado> | undefined> = ref()
const animales: Ref<Array<Animal> | undefined> = ref()

// Añadir donación
const titulo = ref("")
const contexto = ref("")
const dinero_necesario = ref("")
const fecha_inicio = new Date().toISOString()
const animal = ref("")
const afiliado = ref("")
const image = ref()
const errors = ref({
  titulo: "",
  contexto: "",
  dinero_necesario: "",
  animal: "",
  afiliado: "",
  image: "",
})

const subirImagen = (e: any) => {
  image.value = e.target.files[0];
};

// Validación de formulario
const validateForm = () => {
  let isValid = true;

  errors.value.titulo = !titulo.value ? "El título es requerido." : "";
  isValid = titulo.value ? isValid : false;

  errors.value.contexto = !contexto.value ? "El contexto es requerido." : "";
  isValid = contexto.value ? isValid : false;

  errors.value.dinero_necesario = !dinero_necesario.value || isNaN(Number(dinero_necesario.value))
      ? "El dinero necesario es requerido y debe ser un número."
      : "";
  isValid = dinero_necesario.value && !isNaN(Number(dinero_necesario.value)) ? isValid : false;

  errors.value.animal = !animal.value ? "Debe seleccionar un animal." : "";
  isValid = animal.value ? isValid : false;

  errors.value.afiliado = !afiliado.value ? "Debe seleccionar un afiliado." : "";
  isValid = afiliado.value ? isValid : false;

  errors.value.image = !image.value ? "Debe subir una imagen." : "";
  isValid = image.value ? isValid : false;

  return isValid;
};


async function addDonation() {
  if (!validateForm()) {
    return;
  }

  const newDonacion = {
    titulo: titulo.value,
    contexto: contexto.value,
    img: image.value,
    dinero_necesario: dinero_necesario.value,
    dinero_alcanzado: "0",
    fecha_inicio: fecha_inicio,
    animalId: animal.value.split(".")[0],
    afiliadoId: afiliado.value.split(".")[0]
  };

  try {
    await addDonacion(newDonacion);
    await recargarDatos()
    setOpen(false);  // Cierra el modal si la donación se añade exitosamente
  } catch (error) {
    console.error("Error al añadir la donación", error);
  }
}

onMounted(async () => {
  try {
    rowData.value = await getDonaciones()
    afiliados.value = await getAfiliados()
    animales.value = await getAllAnimales()
  } catch (error) {
    console.error("Error al obtener las donaciones, afiliados o animales", error);
  }
})

</script>
<style lang="scss" scoped>
.container {
  margin: 5vh 10vw;
}
</style>
