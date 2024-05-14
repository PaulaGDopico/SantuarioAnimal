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
                                    >Volver Atras</RouterLink
                                >
                            </ion-button>
                        </ion-col>
                        <ion-col>
                            <h1>Gestionar Animales de la Protectora</h1>
                        </ion-col>
                        <ion-col class="ion-text-end">
                            <ion-button @click="setOpen(true)"
                                >Añadir animal</ion-button
                            >
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ag-grid-vue
                    style="height: 500px"
                    class="ag-theme-quartz"
                    :rowData="rowData"
                    :columnDefs="columnDefs"
                    :editType="'fullRow'"
                    :animateRows="true"
                    :suppressClickEdit="true"
                    :pagination="true"
                    :context="context">
                </ag-grid-vue>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>

    <!-- MODAL -->
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
                                label="Nombre Animal"
                                label-placement="floating"
                                fill="solid"
                                placeholder="Introduce nombre">
                            </ion-input>
                        </ion-col>
                        <ion-col>
                            <ion-input
                                v-model="nombre_afiliado"
                                :class="errorInputAfiliadoStyle"
                                label="Nombre Afiliado"
                                label-placement="floating"
                                fill="solid"
                                placeholder="Introduce nombre">
                            </ion-input>
                            <div v-if="mostrarErrorAfiliado" class="error-message">No hay ningún afiliado con ese nombre.</div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-input
                                v-model="animalData.raza"
                                label="Raza"
                                label-placement="floating"
                                fill="solid"
                                placeholder="Introduce la raza">
                            </ion-input>
                        </ion-col>
                        <ion-col>
                            <ion-list>
                                <ion-item>
                                    <ion-select
                                        v-model="animalData.tipo"
                                        aria-label="Sexo">
                                        <ion-select-option value="PERRO"
                                            >Perro</ion-select-option
                                        >
                                        <ion-select-option value="GATO"
                                            >Gato</ion-select-option
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
                                        aria-label="Sexo">
                                        <ion-select-option value="MACHO"
                                            >Macho</ion-select-option
                                        >
                                        <ion-select-option value="HEMBRA"
                                            >Hembra</ion-select-option
                                        >
                                    </ion-select>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col> </ion-col>
                        <ion-col> </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-input
                                v-model="animalData.habitacionId"
                                :class="errorInputHabitacionStyle"
                                type="number"
                                label="Habitación"
                                label-placement="floating"
                                fill="solid"
                                max="20"
                                min="1"></ion-input>
                                <div v-if="mostrarErrorHabitacion" class="error-message">{{ mensaje_error }}</div>
                        </ion-col>
                        <ion-col>
                            <ion-input
                                v-model="animalData.peso"
                                type="number"
                                label="Peso"
                                label-placement="floating"
                                fill="solid"></ion-input>
                        </ion-col>
                        <ion-col>
                            <ion-list>
                                <ion-item>
                                    <ion-select
                                        v-model="animalData.tamanyo"
                                        aria-label="Altura">
                                        <ion-select-option value="MUY_GRANDE"
                                            >Muy Grande</ion-select-option
                                        >
                                        <ion-select-option value="GRANDE"
                                            >Grande</ion-select-option
                                        >
                                        <ion-select-option value="MEDIANO"
                                            >Mediano</ion-select-option
                                        >
                                        <ion-select-option value="PEQUEÑO"
                                            >Pequeño</ion-select-option
                                        >
                                        <ion-select-option value="MUY_PEQUEÑO"
                                            >Muy Pequeño</ion-select-option
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
                                        aria-label="Estado Animal">
                                        <ion-select-option value="SIN_ESTADO"
                                            >Sin estado</ion-select-option
                                        >
                                        <ion-select-option
                                            value="CASOS_ESPECIALES"
                                            >Casos Especiales</ion-select-option
                                        >
                                        <ion-select-option
                                            value="ADOPCION_URGENTE"
                                            >Adopción Urgente</ion-select-option
                                        >
                                        <ion-select-option value="APADRINADO"
                                            >Apadrinado</ion-select-option
                                        >
                                    </ion-select>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                        <!-- <ion-col>
              <ion-input v-model="animalData.donativosNecesarios" type="number" label="Donativos Necesarios" label-placement="floating" fill="solid"
                min="1"></ion-input>
            </ion-col> -->
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <p>Fecha de nacimiento</p>
                            <ion-input
                                v-model="fechaNacimiento"
                                type="date"
                                name="fechaNacimiento"
                                id="fechaNacimiento"
                                class="inputDate"></ion-input>
                        </ion-col>
                        <ion-col>
                            <p>Fecha de ingreso</p>
                            <ion-input
                                v-model="fechaIngreso"
                                type="date"
                                name="fechaIngreso"
                                id="fechaIngreso"
                                class="inputDate"></ion-input>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-textarea
                                v-model="animalData.descripcion"
                                label="Descripción"
                                label-placement="floating"
                                fill="solid"
                                placeholder="Introduce la descripción del animal"></ion-textarea>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                v-on:change="subirImagen" />
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row class="ion-justify-content-end">
                        <ion-col size="3">
                            <ion-button @click="setOpen(false)"
                                >Cancelar</ion-button
                            >
                        </ion-col>
                        <ion-col size="3">
                            <ion-button @click="subirAnimal(animalData)"
                                >Enviar</ion-button
                            >
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-modal>
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
    IonCol,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonList,
} from "@ionic/vue";
import { ref, onMounted, computed, onBeforeMount, provide } from "vue";
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import AppFooter from "@/components/AppFooter.vue";
import GestionarAnimalesEditButton from "@/components/GestionarAnimalesEditButton.vue";
import GestionarAnimalesDeleteButton from "@/components/GestionarAnimalesDeleteButton.vue";
import { getAllAnimalsWithoutPagination } from "@/services/animal";
import { pushAnimal } from "@/services/animal";
import { getAfiliados } from "@/services/afiliados";
import { Afiliado } from "@/types/Afiliado";
import { Habitacion } from "@/types/Habitacion";
import { getHabitaciones } from "@/services/habitacion";

// BOTONES MODAL
const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

const columnDefs = ref([
    { headerName: "Nombre", field: "nombre", sortable: true, filter: true },
    { headerName: "Tipo", field: "tipo", sortable: true, filter: true },
    { headerName: "Sexo", field: "sexo", sortable: true, filter: true },
    { headerName: "Raza", field: "raza", sortable: true, filter: true },
    {
        headerName: "Estado",
        field: "estado_adopcion",
        sortable: true,
        filter: true,
    },
    { headerName: "Imagen", cellRenderer: imageRenderer },
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
        cellRendererFramework: GestionarAnimalesDeleteButton,
        cellRendererParams: (params: any) => ({
            datosFila: params.data,
        }),
    },
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

const nombre_afiliado = ref('');
const afiliados = ref<Afiliado[]>([]);
const es_afiliado = ref(false);

const errorInputAfiliadoStyle = ref('');
const mostrarErrorAfiliado = ref(false);

const existe_habitacion = ref(false);

const errorInputHabitacionStyle = ref('');
const mostrarErrorHabitacion = ref(false);
const mensaje_error = ref('')

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
    habitacionId: "",
    donaciones_recibidas: [],
    afiliadoId:'',
});

const context = ref<{handleDeleteRow: () => void} | null>(null);

const verificarAfiliado = async(afiliadosData:Array<Afiliado> | undefined) => {
    if (!afiliadosData || afiliadosData.length === 0) {
            es_afiliado.value = false;
    }else{
        afiliados.value = afiliadosData;
        console.log(afiliados.value)
        if (!nombre_afiliado.value || nombre_afiliado.value.trim() === '') {
            es_afiliado.value = true;
        }else{
            // Verifica si el nombre_afiliado está presente en la lista de afiliados
            es_afiliado.value = afiliados.value.some(afiliado => afiliado.nombre === nombre_afiliado.value);
            console.log(es_afiliado.value)
            if (es_afiliado.value) {
                // Buscar el ID del afiliado correspondiente al nombre introducido
                const afiliadoEncontrado = afiliados.value.find(afiliado => afiliado.nombre === nombre_afiliado.value);
                if (afiliadoEncontrado) {
                    animalData.value.afiliadoId = afiliadoEncontrado.id;
                }
            }
        }
    }
}

const verificarHabitacion = async (habitacionData:Array<Habitacion> | undefined) => {
    if (!habitacionData || habitacionData.length === 0) {
            existe_habitacion.value = false;
            return;
    }else{
        for(let i=0;i<habitacionData.length;i++){
            console.log(habitacionData[i].id)
            console.log(parseInt(animalData.value.habitacionId))
            if(habitacionData[i].id==parseInt(animalData.value.habitacionId) && habitacionData[i].aforo>habitacionData[i].animals.length){
                existe_habitacion.value=true;
                animalData.value.habitacionId=habitacionData[i].id.toLocaleString()
                break;
            }
            console.log(existe_habitacion.value)
        }
        if(!existe_habitacion.value){
            console.error("No existe la habitación que ha introducido")
            mensaje_error.value= "No existe la habitación que ha introducido";
            return;
        }
        console.log(existe_habitacion.value)
    }
}

// const resetFormData = async () => {
//     animalData.value.nombre = "";
//     animalData.value.tipo = "";
//     animalData.value.estado_adopcion = "";
//     animalData.value.peso = "";
//     animalData.value.tamanyo = "";
//     animalData.value.raza = "";
//     animalData.value.fecha_nacimiento = "";
//     animalData.value.fecha_ingreso = "";
//     animalData.value.sexo = "";
//     animalData.value.img = "";
//     animalData.value.descripcion = "";
//     animalData.value.habitacionId = "";
//     animalData.value.afiliadoId = '';

//     nombre_afiliado.value = '';
// };

const subirAnimal = async (animalData: any) => {
    console.log(animalData);
    try {
        const afiliadosData = await getAfiliados()
        const habitacionData = await getHabitaciones()
        await verificarAfiliado(afiliadosData);
        await verificarHabitacion(habitacionData)
        if (!es_afiliado.value ) {
            console.error("El nombre del afiliado no está en la base de datos.");
            errorInputAfiliadoStyle.value = 'error-input';
            mostrarErrorAfiliado.value = true;
            return;
        }
        if(!existe_habitacion.value){
             errorInputHabitacionStyle.value = 'error-input';
             mostrarErrorHabitacion.value = true;
             return;
        }    
        const animal = await pushAnimal(animalData);
        //await resetFormData();
        setOpen(false);
        rowData.value.push(animal);
        const result = await getAllAnimalsWithoutPagination();
        rowData.value = result; // Asigna los datos recuperados al rowData
    } catch (error) {
        console.error("Error al subir el animal:", error);
    }
};

const handleDeleteRow = async () => {
    console.log(rowData.value)
    rowData.value = await getAllAnimalsWithoutPagination();
    console.log(rowData.value)
};

const subirImagen = (e: any) => {
    animalData.value.img = e.target.files[0];
    console.log(animalData.value.img);
};

onBeforeMount(()=>{
    context.value = {
        handleDeleteRow 
    }

    provide('gridContext',context);
})

onMounted(async () => {
    try {
        const animales = await getAllAnimalsWithoutPagination();
        console.log(animales);
        rowData.value = animales; // Asigna los datos recuperados al rowData

        
    } catch (error) {
        console.error("Error al obtener los animales:", error);
    }
});




// const rowData = ref([
//   { id: 0, nombre: 'Roy', tipo: 'Perro', sexo: 'Macho', raza: 'Bulldog', estado: 'casos-especiales', peso: 5, altura: "muy-pequeño", donativo: 0, afiliado: "", habitacion: 3, fechaNacimiento: '2024-03-05', fechaIngreso: '2020-05-03', imagen: 'pexels-snapwire-46024.jpg' },
//   { nombre: 'Marin', tipo: 'Gato', sexo: 'Hembra', raza: 'Persa', estado: 'sin-estado', imagen: 'pexels-snapwire-46024.jpg' },
//   { nombre: 'Gafe', tipo: 'Gato', sexo: 'Macho', raza: 'Europeo', estado: 'adopcion-urgente', imagen: 'pexels-snapwire-46024.jpg' },
//   { nombre: 'Tristepin', tipo: 'Perro', sexo: 'Hembra', raza: 'Chihuahua', estado: 'apadrinado', imagen: 'perro.jpg' }
// ]);

function imageRenderer(params: any) {
    const wrapper = document.createElement("div");

    const image = document.createElement("img");
    image.src += "http://localhost:3000/" + params.data.img;
    image.style.width = "100px";
    image.style.height = "100px";
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

.error-input {
    border-color: red; /* Cambia el borde del campo de entrada a rojo */
}

.error-message {
    color: red; /* Color rojo para el mensaje de error */
    font-size: 14px; /* Tamaño de fuente del mensaje de error */
    margin-top: 5px; /* Espaciado superior para separar el mensaje de error del campo de entrada */
}
</style>
