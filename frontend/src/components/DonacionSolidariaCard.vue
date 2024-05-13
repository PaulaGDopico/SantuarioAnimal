<template>
    <ion-col size="7" size-md="2" class="cartaAnimal">
        <h3 :class="retoCumplidoClass">{{ retoCumplidoTitle }}</h3>
        <div class="contenedorImg">
            <img :src="props.urlImg" alt="Foto animal">
        </div>
        <h1>{{ props.nombre }}</h1>
        <p>{{ props.descripcion }}</p>
        <RouterLink class="" :to="{
            name: 'DonacionesSolidariasInfo',
            params: {
                donacion_id: props.id
            }
        }">Más información</RouterLink>
    </ion-col>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {IonCol} from "@ionic/vue";
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    },
    donado: {
        type: Number,
        required: true
    },
    fondoNecesario: {
        type: Number,
        required: true
    }
})
const retoCumplidoClass = ref()
const retoCumplidoTitle = ref()
function retoConseguido(donado:number,fondoNecesario:number) {
    if (donado >= fondoNecesario) {
        retoCumplidoClass.value = "Reto_conseguido";
        retoCumplidoTitle.value = "Reto conseguido";
    } else {
        retoCumplidoClass.value = "no-conseguido";
    }
}
onMounted( ()=>{
   retoConseguido(props.donado,props.fondoNecesario) 
});
</script>
<style scoped lang="scss">

.no-conseguido {
    padding: 14px;
}
ion-col {
    text-align: center;
    background-color: var(--ion-card-background);
    margin:20px;
    height: 265px;
    padding: 0px;
    h3 {
        font-family: "Ubuntu",sans-serif;
    }
    .contenedorImg {
        img {
            width: 100%;
            height: 130px;
            object-fit: cover;
            margin-top: -28px;
            border-radius: 5px 5px 0px 0px;
        }
    }

    a {
        background-color: #FF914D;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 5px;
        text-decoration: none;
        border-radius: 0px 0px 5px 5px;
        color: white;
    }

    h1 {
        margin-top: 10px;
    }
    
    h3 {
        margin: 0px;
        padding: 5px;
        font-size: 15px;
        position: relative;
        top: 0px;
        border-radius: 5px 5px 0px 0px;
    }

    p {
        padding: 5px;
        height: 15%;
        text-align: justify;
    }
}
</style>