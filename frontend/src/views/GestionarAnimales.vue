<template>
  <ion-page>
    <ion-content>
      <div class="main-wrapper">
        <ion-grid>
          <ion-row
              class="ion-justify-content-between ion-align-items-center">
            <ion-col>
              <ion-button>
                <RouterLink :to="{ name: 'InicioSesion' }"
                >Volver Atras
                </RouterLink
                >
              </ion-button>
            </ion-col>
            <ion-col>
              <h1>Gestionar Animales de la Protectora</h1>
            </ion-col>
            <ion-col class="ion-text-end">
              <ion-button @click="setOpen(true)"
              >Añadir animal
              </ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <ag-grid-vue
            :animateRows="true"
            :columnDefs="columnDefs"
            :context="context"
            :editType="'fullRow'"
            :pagination="true"
            :rowData="rowData"
            :suppressClickEdit="true"
            class="ag-theme-quartz"
            style="height: 500px">
        </ag-grid-vue>
      </div>
      <app-footer></app-footer>
    </ion-content>
    <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">

      <ion-header>
        <ion-toolbar>
          <ion-title>FORMULARI AÑADIR ANIMAL</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-input
                    v-model="animalData.nombre"
                    fill="solid"
                    label="Nombre Animal"
                    label-placement="floating"
                    placeholder="Introduce nombre"
                    required>
                </ion-input>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-input
                    v-model="animalData.raza"
                    fill="solid"
                    label="Raza"
                    label-placement="floating"
                    placeholder="Introduce la raza"
                    required>
                </ion-input>
              </ion-col>
              <ion-col>
                <ion-list>
                  <ion-item>
                    <ion-select
                        v-model="animalData.tipo"
                        aria-label="Sexo"
                        required>
                      <ion-select-option value="PERRO"
                      >Perro
                      </ion-select-option
                      >
                      <ion-select-option value="GATO"
                      >Gato
                      </ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
              <ion-col>
                <ion-list>
                  <ion-item>
                    <ion-select
                        v-model="animalData.sexo"
                        aria-label="Sexo"
                        required>
                      <ion-select-option value="MACHO"
                      >Macho
                      </ion-select-option
                      >
                      <ion-select-option value="HEMBRA"
                      >Hembra
                      </ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-input
                    v-model="animalData.habitacionId"
                    :class="errorInputHabitacionStyle"
                    fill="solid"
                    label="Habitación"
                    label-placement="floating"
                    max="20"
                    min="1"
                    required
                    type="number"></ion-input>
                <div v-if="mostrarErrorHabitacion" class="error-message">{{ mensaje_errorHabitacion }}</div>
              </ion-col>
              <ion-col>
                <ion-input
                    v-model="animalData.peso"
                    fill="solid"
                    label="Peso"
                    label-placement="floating"
                    required
                    type="number"></ion-input>
              </ion-col>
              <ion-col>
                <ion-list>
                  <ion-item>
                    <ion-select
                        v-model="animalData.tamanyo"
                        aria-label="Altura"
                        required>
                      <ion-select-option value="MUY_GRANDE"
                      >Muy Grande
                      </ion-select-option
                      >
                      <ion-select-option value="GRANDE"
                      >Grande
                      </ion-select-option
                      >
                      <ion-select-option value="MEDIANO"
                      >Mediano
                      </ion-select-option
                      >
                      <ion-select-option value="PEQUEÑO"
                      >Pequeño
                      </ion-select-option
                      >
                      <ion-select-option value="MUY_PEQUEÑO"
                      >Muy Pequeño
                      </ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-list>
                  <ion-item>
                    <ion-select
                        v-model="animalData.estado_adopcion"
                        aria-label="Estado Animal"
                        required>
                      <ion-select-option value="SIN_ESTADO"
                      >Sin estado
                      </ion-select-option
                      >
                      <ion-select-option
                          value="CASOS_ESPECIALES"
                      >Casos Especiales
                      </ion-select-option
                      >
                      <ion-select-option
                          value="ADOPCION_URGENTE"
                      >Adopción Urgente
                      </ion-select-option
                      >
                      <ion-select-option value="APADRINADO"
                      >Apadrinado
                      </ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <p>Fecha de nacimiento</p>
                <ion-input
                    id="fechaNacimiento"
                    v-model="fechaNacimiento"
                    class="inputDate"
                    name="fechaNacimiento"
                    required
                    type="date"></ion-input>
              </ion-col>
              <ion-col>
                <p>Fecha de ingreso</p>
                <ion-input
                    id="fechaIngreso"
                    v-model="fechaIngreso"
                    class="inputDate"
                    name="fechaIngreso"
                    required
                    type="date"></ion-input>
              </ion-col>
            </ion-row>
            <div v-if="mostrarErrorFecha" class="error-message">{{ mensaje_errorFecha }}</div>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-textarea
                    v-model="animalData.descripcion"
                    fill="solid"
                    label="Descripción"
                    label-placement="floating"
                    placeholder="Introduce la descripción del animal"></ion-textarea>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <input
                    id="image"
                    name="image"
                    type="file"
                    v-on:change="subirImagen"/>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <div v-if="campo_vacio" class="error-message">Tienes campos vacios</div>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row class="ion-justify-content-end">
              <ion-col size="3">
                <ion-button @click="setOpen(false)"
                >Cancelar
                </ion-button
                >
              </ion-col>
              <ion-col size="3">
                <ion-button type="submit"
                            @click="subirAnimal(animalData)">Enviar
                </ion-button
                >
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-content>
    </ion-modal>
  </ion-page>

  <!-- MODAL -->

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
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import {computed, onBeforeMount, onMounted, provide, ref} from "vue";
import {AgGridVue} from "ag-grid-vue3"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import AppFooter from "@/components/AppFooter.vue";
import GestionarAnimalesEditButton from "@/components/GestionarAnimalesEditButton.vue";
import GestionarAnimalesDeleteButton from "@/components/GestionarAnimalesDeleteButton.vue";

import {getAllAnimalsWithoutPagination, pushAnimal} from "@/services/animal";

import {Habitacion} from "@/types/Habitacion";
import {getHabitaciones} from "@/services/habitacion";


// BOTONES MODAL
const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

const columnDefs = ref([

  {headerName: "Nombre", field: "nombre", sortable: true, filter: true},
  {headerName: "Tipo", field: "tipo", sortable: true, filter: true},
  {headerName: "Sexo", field: "sexo", sortable: true, filter: true},
  {headerName: "Raza", field: "raza", sortable: true, filter: true},
  {
    headerName: "Estado",
    field: "estado_adopcion",
    sortable: true,
    filter: true,
  },
  {headerName: "Imagen", cellRenderer: imageRenderer},
  {
    headerName: "Editar",
    cellRenderer: GestionarAnimalesEditButton,
    cellRendererParams: (params: any) => ({
      datosFila: params.data
    }),
  },
  {
    headerName: "Eliminar",
    cellRenderer: GestionarAnimalesDeleteButton,
    cellRendererParams: (params: any) => ({
      datosFila: params.data,
    }),
  }
]);

const rowData: any = ref([]);

const fechaNacimiento = ref("");
const fechaIngreso = ref("");

const fechaNacimientoConvertida = computed(
    () => `${fechaNacimiento.value}T00:00:00Z`
);
const fechaIngresoConvertida = computed(
    () => `${fechaIngreso.value}T00:00:00Z`
);

const existe_habitacion = ref(false);
const campo_vacio = ref(false)
const fecha_incorrecta = ref(false)

const errorInputHabitacionStyle = ref('');
const mostrarErrorHabitacion = ref(false);

const mensaje_errorHabitacion = ref('')
const mensaje_errorFecha = ref('')
const mostrarErrorFecha = ref(false)

const errorInputVacioStyle = ref('');

const animalData = ref({
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  nombre: "",
  tipo: "",
  estado_adopcion: "",
  peso: "",
  tamanyo: "",
  raza: "",
  fecha_nacimiento: fechaNacimientoConvertida,
  fecha_ingreso: fechaIngresoConvertida,
  sexo: "",
  img: "",
  descripcion: "",
  habitacionId: 0,
  donaciones_recibidas: [],
  afiliadoId: 0,
});

const context = ref<{ handleDeleteRow: () => void } | null>(null);


const verificarHabitacion = async (habitacionData: Array<Habitacion> | undefined) => {
  if (!habitacionData || habitacionData.length === 0) {
    existe_habitacion.value = false;
    return;
  } else {
    for (let i = 0; i < habitacionData.length; i++) {
      if (habitacionData[i].id.toString() == animalData.value.habitacionId.toString() && habitacionData[i].aforo > habitacionData[i].animals.length) {
        existe_habitacion.value = true;
        animalData.value.habitacionId = habitacionData[i].id
        mensaje_errorHabitacion.value = ""
        break;
      }
    }
    if (!existe_habitacion.value) {
      console.log(animalData.value.habitacionId)
      console.error("No existe la habitación que ha introducido")
      mensaje_errorHabitacion.value = "No existe la habitación que ha introducido o el aforo esta lleno";
      return;
    }
    console.log(existe_habitacion.value)
  }
}

const verificarFechas = async () => {
  const dateNacimiento = new Date(animalData.value.fecha_nacimiento)
  const dateIngreso = new Date(animalData.value.fecha_ingreso)
  console.log(dateNacimiento)
  console.log(dateIngreso)
  if (dateNacimiento > dateIngreso) {
    fecha_incorrecta.value = true;
    mensaje_errorFecha.value = "Fechas incorrectas. La fecha de nacimiento debe de ser anterior a la de fecha de ingreso"
  } else {
    fecha_incorrecta.value = false
    mensaje_errorFecha.value = ""
  }
  console.log(fecha_incorrecta.value)
}

const verificarCamposVacios = async () => {
  if (
      fechaNacimiento.value == "" ||
      fechaIngreso.value == "" ||

      animalData.value.nombre == "" ||
      animalData.value.tipo == "" ||
      animalData.value.estado_adopcion == "" ||
      animalData.value.peso == "" ||
      animalData.value.tamanyo == "" ||
      animalData.value.raza == "" ||
      animalData.value.sexo == "" ||
      animalData.value.img == ""
  ) {
    campo_vacio.value = true
  }
}

const resetFormData = async () => {
  fechaNacimiento.value = ""
  fechaIngreso.value = ""

  animalData.value.nombre = "";
  animalData.value.tipo = "";
  animalData.value.estado_adopcion = "";
  animalData.value.peso = "";
  animalData.value.tamanyo = "";
  animalData.value.raza = "";
  animalData.value.sexo = "";
  animalData.value.img = "";
  animalData.value.descripcion = "";
  animalData.value.habitacionId = 0;

};

const subirAnimal = async (animalData: any) => {
  console.log(animalData);
  try {
    existe_habitacion.value = false
    fecha_incorrecta.value = false
    campo_vacio.value = false
    const habitacionData = await getHabitaciones()
    await verificarHabitacion(habitacionData)
    await verificarFechas()
    await verificarCamposVacios()
    if (!existe_habitacion.value || campo_vacio.value || fecha_incorrecta.value) {
      if (!existe_habitacion.value) {
        console.error("La habitación no esta en la base de datos")
        errorInputHabitacionStyle.value = 'error-input';
        mostrarErrorHabitacion.value = true;
      }
      if (campo_vacio.value) {
        console.error("Tienes campos vacios")
        errorInputVacioStyle.value = 'error-input';
        console.log(campo_vacio.value)
      }
      if (fecha_incorrecta.value) {
        console.error("La fecha de nacimiento no puede ser menor a la fecha de ingreso");
        mostrarErrorFecha.value = true;
      }
      return;
    } else {
      const animal = await pushAnimal(animalData);
      setOpen(false);
      rowData.value.push(animal);
      rowData.value = await getAllAnimalsWithoutPagination(); // Asigna los datos recuperados al rowData
      await resetFormData();
    }

  } catch (error) {
    console.error("Error al subir el animal:", error);
  }
};

const handleDeleteRow = async () => {
  rowData.value = await getAllAnimalsWithoutPagination();
};

const subirImagen = (e: any) => {
  animalData.value.img = e.target.files[0];
  console.log(animalData.value.img);
};

onBeforeMount(() => {
  context.value = {
    handleDeleteRow
  }

  provide('gridContext', context);
})

onMounted(async () => {
  try {
    rowData.value = await getAllAnimalsWithoutPagination(); // Asigna los datos recuperados al rowData

  } catch (error) {
    console.error("Error al obtener los animales:", error);
  }
});

function imageRenderer(params: any) {
  const wrapper = document.createElement("div");

  const image = document.createElement("img");
  image.src += params.data.img;
  image.style.width = "100px";
  image.style.height = "100px";
  wrapper.appendChild(image);

  return wrapper;
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}

.buttonDelete {
  background-color: rgb(145, 30, 30);
  color: white;
}

.error-input {
  border-color: red; /* Cambia el borde del campo de entrada a rojo */
}

.error-message {
  color: red; /* Color rojo para el mensaje de error */
  font-size: 14px; /* Tamaño de fuente del mensaje de error */
  margin-top: 5px; /* Espaciado superior para separar el mensaje de error del campo de entrada */
}
</style>

