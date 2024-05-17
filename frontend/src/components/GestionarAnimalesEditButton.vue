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
                                <ion-text v-if="mostrarErrorAfiliado" class="error-message">{{ mensaje_errorAfiliado }}</ion-text>
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
                                <ion-text v-if="mostrarErrorHabitacion" class="error-message">{{ mensaje_errorHabitacion }}</ion-text>
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
                                                value="MUY_GRANDE"
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
                                            <ion-select-option
                                                value="MUY_PEQUEÑO"
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
                        <ion-text v-if="mostrarErrorFecha" class="error-message">{{ mensaje_errorFecha }}</ion-text>
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
                    <ion-row>
                            <ion-col>
                                <ion-text v-if="campo_vacio" class="error-message">Tienes campos vacios</ion-text>
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
    IonText
} from "@ionic/vue";
import {  createOutline } from "ionicons/icons";
import { ref, computed, inject, Ref, onBeforeMount} from "vue";
import { getAfiliados } from "@/services/afiliados";
import { Afiliado } from "@/types/Afiliado";
import { updateAnimal } from "@/services/animal";
import { getHabitaciones } from "@/services/habitacion";
import { Habitacion } from "@/types/Habitacion";

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


const fechaIngresoCompleta = props.params.datosFila.fecha_ingreso
const fechaIngresoFormateada = fechaIngresoCompleta.split('T')[0];


const fechaNacimiento = ref(fechaNacimientoFormateada);
const fechaIngreso = ref(fechaIngresoFormateada);

const fechaNacimientoConvertida = computed(
    () => `${fechaNacimiento.value}T00:00:00Z`
);

const fechaIngresoConvertida = computed(
    () => `${fechaIngreso.value}T00:00:00Z`
);

const nombre_afiliado = ref('');

const es_afiliado = ref(false);
const existe_habitacion = ref(false);
const campo_vacio = ref(false)
const fecha_incorrecta = ref(false);

const mensaje_errorAfiliado = ref('')
const mensaje_errorFecha = ref('')
const mensaje_errorHabitacion = ref('')

const errorInputAfiliadoStyle = ref('');
const errorInputHabitacionStyle = ref('');
const errorInputVacioStyle = ref('');

const mostrarErrorHabitacion = ref(false);
const mostrarErrorAfiliado = ref(false);
const mostrarErrorFecha = ref(false)

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
    habitacionId: props.params.datosFila.habitacionId,
    donaciones_recibidas: [],
    afiliadoId: props.params.datosFila.afiliado_id,
});


const subirImagen = (e: any) => {
    animalData.value.img = e.target.files[0];
};

const getNombreAfiliado = (afiliadosData:Array<Afiliado> | undefined)=>{
    if (!afiliadosData || afiliadosData.length === 0) {
            es_afiliado.value = false;
    }else{
        if(props.params.datosFila.afiliadoId==null){
            nombre_afiliado.value=""
            animalData.value.afiliadoId=null
        }
        else{

            for(let i=0;i<afiliadosData.length;i++){
                if(afiliadosData[i].id==props.params.datosFila.afiliadoId){
                    animalData.value.afiliadoId=afiliadosData[i].id
                    nombre_afiliado.value = afiliadosData[i].nombre
                }
            }
        }
        
    }   
}



const verificarAfiliado = async(afiliadosData:Array<Afiliado> | undefined) => {
    console.log("Hola")
    console.log(animalData.value.afiliadoId)
    if (!afiliadosData || afiliadosData.length === 0) {
            es_afiliado.value = false;
    }else{
        if(nombre_afiliado.value==""){
            animalData.value.afiliadoId=null;
            es_afiliado.value=true
            mensaje_errorAfiliado.value=""
        }else{
            for(let i=0;i<afiliadosData.length;i++){
                if(afiliadosData[i].nombre==nombre_afiliado.value){
                    console.log(nombre_afiliado.value)
                    es_afiliado.value=true;
                    animalData.value.afiliadoId=afiliadosData[i].id
                    console.log(animalData.value.afiliadoId)
                    mensaje_errorAfiliado.value=""
                    
                    break;
                }
            }
        }  
        
        if(!es_afiliado.value){
            console.error("No existe el afiliado introducido")
            mensaje_errorAfiliado.value="No existe el nombre del afiliado introducido";
        }
    }
}

const verificarHabitacion = async (habitacionData:Array<Habitacion> | undefined) => {
    if (!habitacionData || habitacionData.length === 0) {
            existe_habitacion.value = false;
            return;
    }else{
        for(let i=0;i<habitacionData.length;i++){
            if(habitacionData[i].id.toString()==animalData.value.habitacionId.toString() && habitacionData[i].aforo>habitacionData[i].animals.length){
                existe_habitacion.value=true;
                animalData.value.habitacionId=habitacionData[i].id
                mensaje_errorHabitacion.value=""
                break;
            }
            console.log(habitacionData[i].id)
        }
        if(!existe_habitacion.value){
            console.log(animalData.value.habitacionId)
            console.error("No existe la habitación que ha introducido")
            mensaje_errorHabitacion.value= "No existe la habitación que ha introducido o el aforo esta lleno";
            return;
        }
    }
}

const verificarFechas = async () =>{
    const dateNacimiento = new Date(animalData.value.fecha_nacimiento)
    const dateIngreso = new Date(animalData.value.fecha_ingreso)
    console.log(dateNacimiento)
    console.log(dateIngreso)
    if(dateNacimiento>dateIngreso){
        fecha_incorrecta.value = true;
        mensaje_errorFecha.value = "Fechas incorrectas. La fecha de nacimiento debe de ser anterior a la de fecha de ingreso"
    }else{
        fecha_incorrecta.value=false
        mensaje_errorFecha.value = ""
    }
    console.log(fecha_incorrecta.value)
}

const verificarCamposVacios = async () =>{
  if(
    fechaNacimiento.value == "" ||
    fechaIngreso.value == "" ||

    animalData.value.nombre == "" ||
    animalData.value.tipo == "" ||
    animalData.value.estado_adopcion == "" ||
    animalData.value.peso == "" ||
    animalData.value.tamanyo == "" ||
    animalData.value.raza == "" ||
    animalData.value.sexo == ""
  ){
    campo_vacio.value=true
  }
}

const modificarAnimal = async(animalData:any)=>{
    try{
        existe_habitacion.value = false
        es_afiliado.value = false
        fecha_incorrecta.value = false
        campo_vacio.value = false
        const afiliadosData = await getAfiliados();
        const habitacionData = await getHabitaciones()
        await verificarAfiliado(afiliadosData);
        await verificarHabitacion(habitacionData)
        await verificarFechas()
        await verificarCamposVacios()
        if (!es_afiliado.value || campo_vacio.value || !existe_habitacion.value || fecha_incorrecta.value) {
            if(!es_afiliado.value){
                console.error("El nombre del afiliado no está en la base de datos.");
                errorInputAfiliadoStyle.value = 'error-input';
                mostrarErrorAfiliado.value = true;
            }
            if(!existe_habitacion.value){
                errorInputHabitacionStyle.value = 'error-input';
                mostrarErrorHabitacion.value = true;
            }
            if(fecha_incorrecta.value){
                console.error("La fecha de nacimiento no puede ser menor a la fecha de ingreso");
                mostrarErrorFecha.value = true;
            }   
            if(campo_vacio.value){
                console.error("Tienes campos vacios")
                errorInputVacioStyle.value = 'error-input';
                console.log(animalData.value)
                console.log(campo_vacio.value)
            }
            return;    
        }else{
            await updateAnimal(props.params.datosFila.id, animalData);
            if(gridContext && gridContext.value && gridContext.value.handleDeleteRow){
                gridContext.value.handleDeleteRow();
            }
            setOpen(false);
        }
        
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