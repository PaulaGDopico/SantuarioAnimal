<template>
    <ion-content>
        <ion-button @click="setOpen(true)"
            ><ion-icon :icon="createOutline" :name="createOutline"></ion-icon
        ></ion-button>

        <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
            <ion-header>
                <ion-toolbar>
                    <ion-title>FORMULARI MODIFICAR ANIMAL</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="setOpen(false)">Close</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div v-if="props.params.datosFila">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    label="Nombre Animal"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce nombre"
                                    :value="props.params.datosFila.nombre"
                                    v-model="animalData.nombre">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    label="Nombre Afiliado"
                                    :class="errorInputAfiliadoStyle"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce nombre"
                                    v-model="nombre_afiliado">
                                </ion-input>
                                <div v-if="mostrarErrorAfiliado" class="error-message">No hay ningún afiliado con ese nombre.</div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    label="Raza"
                                    label-placement="floating"
                                    fill="solid"
                                    placeholder="Introduce la raza"
                                    :value="props.params.datosFila.raza"
                                    v-model="animalData.raza">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Tipo"
                                            :value="
                                                props.params.datosFila.tipo
                                            "
                                            v-model="animalData.tipo">
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
                                            aria-label="Sexo"
                                            :value="
                                                props.params.datosFila.sexo
                                            "
                                            v-model="animalData.sexo">
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
                                    type="number"
                                    label="Habitación"
                                    label-placement="floating"
                                    fill="solid"
                                    max="20"
                                    min="1"

                                    v-model="animalData.habitacionId">
                                </ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    type="number"
                                    label="Peso"
                                    label-placement="floating"
                                    fill="solid"
                                    :value="
                                        props.params.datosFila.peso
                                    "
                                    v-model="animalData.peso"
                                    ></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-list>
                                    <ion-item>
                                        <ion-select
                                            aria-label="Altura"
                                            :value="
                                                props.params.datosFila.tamanyo
                                            "
                                            v-model="animalData.tamanyo"
                                            >
                                            <ion-select-option
                                                value="muy-grande"
                                                >Muy Grande</ion-select-option
                                            >
                                            <ion-select-option value="grande"
                                                >Grande</ion-select-option
                                            >
                                            <ion-select-option value="mediano"
                                                >Mediano</ion-select-option
                                            >
                                            <ion-select-option value="pequeño"
                                                >Pequeño</ion-select-option
                                            >
                                            <ion-select-option
                                                value="muy-pequeño"
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
                                            aria-label="Estado Animal"
                                            :value="
                                                props.params.datosFila.estado_adopcion
                                            "
                                            v-model="animalData.estado_adopcion">
                                            <ion-select-option
                                                value="SIN_ESTADO"
                                                >Sin estado</ion-select-option
                                            >
                                            <ion-select-option
                                                value="CASOS_ESPECIALES"
                                                >Casos
                                                Especiales</ion-select-option
                                            >
                                            <ion-select-option
                                                value="ADOPCION_URGENTE"
                                                >Adopción
                                                Urgente</ion-select-option
                                            >
                                            <ion-select-option
                                                value="APADRINADO"
                                                >Apadrinado</ion-select-option
                                            >
                                        </ion-select>
                                    </ion-item>
                                </ion-list>
                            </ion-col>
                            <!-- <ion-col>
                                <ion-input
                                    type="number"
                                    label="Donativos Necesarios"
                                    label-placement="floating"
                                    fill="solid"
                                    :value="props.params.datosFila.donaciones_recibidas"
                                    min="1"></ion-input>
                            </ion-col> -->
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <p>Fecha de nacimiento</p>
                                <input
                                    type="date"
                                    name="fecha_nacimiento"
                                    id="fechaNacimiento"
                                    class="inputDate"
                                    
                                    v-model="fechaNacimiento"
                                    >
                            </ion-col>
                            <ion-col>
                                <p>Fecha de ingreso</p>
                                <input
                                    type="date"
                                    name="fechaIngreso"
                                    id="fechaIngreso"
                                    class="inputDate"
                                    
                                    v-model="fechaIngreso"
                                    />
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-textarea
                                    :value="props.params.datosFila.descripcion"
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
                                name="img"
                                id="img"
                                
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
                                <ion-button @click="modificarAnimal(animalData)">Enviar</ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-else>
                    <p>Error al cargar los datos del Animal.</p>
                </div>
            </ion-content>
        </ion-modal>
    </ion-content>
</template>

<script lang="ts" setup>
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonTextarea,
    IonIcon,
} from "@ionic/vue";
import {  createOutline } from "ionicons/icons";
import { ref, computed, inject, Ref, onMounted, onBeforeMount} from "vue";
import { getAfiliados } from "@/services/afiliados";
import { Afiliado } from "@/types/Afiliado";
import { updateAnimal } from "@/services/animal";


// Definimos las props para recibir los datos de la fila
const props = defineProps<{
    params: {
        datosFila: any;
    };
}>();

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);

const fechaNacimientoCompleta = props.params.datosFila.fecha_nacimiento
const fechaNacimientoFormateada = fechaNacimientoCompleta.split('T')[0];
console.log(fechaNacimientoFormateada)

const fechaIngresoCompleta = props.params.datosFila.fecha_ingreso
const fechaIngresoFormateada = fechaIngresoCompleta.split('T')[0];
console.log(fechaIngresoFormateada)

const fechaNacimiento = ref(fechaNacimientoFormateada);
const fechaIngreso = ref(fechaIngresoFormateada);

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

const gridContext = inject<Ref<{handleDeleteRow: () => void} | null>>("gridContext")

const animalData = ref({
    createdAt: props.params.datosFila.createdAt,
    updatedAt: new Date().toISOString(),
    nombre: props.params.datosFila.nombre,
    tipo: props.params.datosFila.tipo,
    estado_adopcion: props.params.datosFila.estado_adopcion,
    peso: props.params.datosFila.peso,
    tamanyo: props.params.datosFila.tamanyo,
    raza: props.params.datosFila.raza,
    fecha_nacimiento: fechaNacimientoConvertida,
    fecha_ingreso: fechaIngresoConvertida,
    sexo: props.params.datosFila.sexo,
    img: props.params.datosFila.img,
    descripcion: props.params.datosFila.descripcion,
    habitacionId: 1,
    donaciones_recibidas: [],
    afiliadoId: '',
});


const subirImagen = (e: any) => {
    animalData.value.img = e.target.files[0];
    console.log(animalData.value.img);
};

const getNombreAfiliado = (afiliadosData:Array<Afiliado> | undefined)=>{
    if (!afiliadosData || afiliadosData.length === 0) {
            es_afiliado.value = false;
    }else{
        console.log(afiliadosData)
        // const afiliadoEncontrado = afiliadosData.find(afiliado => afiliado.id === props.params.datosFila.afiliado_id);
        for(let i=0;i<afiliadosData.length;i++){
            console.log(afiliadosData[i].id)
            console.log(props.params.datosFila.afiliadoId)
            if(afiliadosData[i].id==props.params.datosFila.afiliadoId){
                nombre_afiliado.value = afiliadosData[i].nombre
                console.log(afiliadosData[i].nombre)
            }
        }
    }   
}



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

const modificarAnimal = async(animalData:any)=>{
    try{
        const afiliadosData = await getAfiliados();
        await verificarAfiliado(afiliadosData);
        if (!es_afiliado.value) {
            console.error("El nombre del afiliado no está en la base de datos.");
            errorInputAfiliadoStyle.value = 'error-input';
            mostrarErrorAfiliado.value = true;
            return;
        }
        await updateAnimal(props.params.datosFila.id, animalData);
        if(gridContext && gridContext.value && gridContext.value.handleDeleteRow){
            gridContext.value.handleDeleteRow();
        }
        setOpen(false);

    }catch(error){
        console.error("Error al subir el animal:", error);
    }
}

onBeforeMount(async()=>{
    const afiliadosData = await getAfiliados();
    getNombreAfiliado(afiliadosData)
})



</script>

<style scoped lang="scss">
    .error-input {
        border-color: red; /* Cambia el borde del campo de entrada a rojo */
    }

    .error-message {
        color: red; /* Color rojo para el mensaje de error */
        font-size: 14px; /* Tamaño de fuente del mensaje de error */
        margin-top: 5px; /* Espaciado superior para separar el mensaje de error del campo de entrada */
    }
</style>