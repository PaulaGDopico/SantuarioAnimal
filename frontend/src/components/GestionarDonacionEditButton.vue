<template>
  <ion-content>
    <ion-button @click="setOpen(true)"
    >
      <ion-icon :icon="createOutline" :name="createOutline"></ion-icon
      >
    </ion-button>

    <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
      <ion-header>
        <ion-toolbar>
          <ion-title>MODIFICAR DONACIÓN</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">Cerrar</ion-button>
            <ion-button @click="modifyDonation()">Enviar</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-input v-model="titulo" label="Título"
                         label-placement="floating" type="text"></ion-input>
              <ion-text v-if="errors.titulo" color="danger">{{ errors.titulo }}</ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-textarea v-model="contexto" label="Contexto"
                            label-placement="floating"></ion-textarea>
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
              <ion-input v-model="dinero_necesario"
                         label="Dinero necesario" label-placement="floating"
                         type="number"></ion-input>
              <ion-text v-if="errors.dinero_necesario" color="danger">{{ errors.dinero_necesario }}</ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-select v-model="animal" aria-label="Animal"
                          interface="popover" placeholder="Seleccionar Animal">
                <ion-select-option v-for="animal in animales" :key="animal.id">
                  {{ animal.id }}.{{ animal.nombre }}
                </ion-select-option>
              </ion-select>
              <ion-text v-if="errors.animal" color="danger">{{ errors.animal }}</ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-select v-model="afiliado" aria-label="Afiliado"
                          interface="popover"
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
</template>

<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import {createOutline} from "ionicons/icons";
import {inject, onMounted, Ref, ref} from "vue";
import {Afiliado} from "@/types/Afiliado";
import {Animal} from "@/types/Animal";
import {putDonacion} from "@/services/donacion";
import {getAfiliados} from "@/services/afiliado";
import {getAllAnimales} from "@/services/animal";
// Definimos las props para recibir los datos de la fila
const props = defineProps<{
  params: {
    datosFila: any;
  };
}>();
const recargarDatos = inject<() => Promise<void>>('recargarDatos');

const isOpen = ref(false);

// Datos de animales y afiliados
const afiliados: Ref<Array<Afiliado> | undefined> = ref()
const animales: Ref<Array<Animal> | undefined> = ref()

// Añadir donación
const titulo = ref(props.params.datosFila.titulo)
const contexto = ref(props.params.datosFila.contexto)
const dinero_necesario = ref(props.params.datosFila.dinero_necesario)
const fecha_inicio = new Date(props.params.datosFila.fecha_inicio).toISOString();
const animal = ref(props.params.datosFila.animalId)
const afiliado = ref(props.params.datosFila.afiliadoId)
const image = ref(props.params.datosFila.image)
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

const setOpen = (open: boolean) => (isOpen.value = open);
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

  return isValid;
};

async function modifyDonation() {
  if (!validateForm()) {
    return;
  }
  console.log(typeof (fecha_inicio))
  const newDonacion = {
    titulo: titulo.value,
    contexto: contexto.value,
    img: image.value,
    dinero_necesario: dinero_necesario.value,
    dinero_alcanzado: "0",
    fecha_inicio: fecha_inicio,
    animalId: animal.value,
    afiliadoId: afiliado.value
  };

  try {
    await putDonacion(props.params.datosFila.id, newDonacion);
    setOpen(false);
    if (recargarDatos) {
      await recargarDatos()
    }
    console.log("aaa")
    // Cierra el modal si la donación se añade exitosamente
  } catch (error) {
    console.error("Error al añadir la donación", error);
  }
}

onMounted(async () => {
  try {
    afiliados.value = await getAfiliados()
    animales.value = await getAllAnimales()
  } catch (error) {
    console.error("Error al obtener las donaciones, afiliados o animales", error);
  }
})
</script>
