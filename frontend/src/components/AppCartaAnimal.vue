<template>
  <ion-col class="cartaAnimal" size="12" size-lg="2" size-md="3" size-sm="5">
    <div class="contenedorImg">
      <h3 :class="props.estadoAdopcion">{{ estadoAdopcionTitle }}</h3>
      <img :src="props.urlImg" alt="Foto animal">
    </div>
    <h1>{{ props.nombre }}</h1>
    <p>{{ props.animal }} | {{ props.raza }}</p>
    <div class="ver-ficha">
      <RouterLink :to="{
            name: 'Animal',
            params: {
                animal_id: props.id
            }
        }" class="">Ver Ficha
      </RouterLink>
    </div>
  </ion-col>
</template>
<script lang="ts" setup>
import {IonCol} from "@ionic/vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  estadoAdopcion: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  animal: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  urlImg: {
    type: String,
    required: true
  }
})
const estadoAdopcionTitle = asignarTituloEstado(props.estadoAdopcion)
function asignarTituloEstado(estadoAdopcion:string) {
  switch(estadoAdopcion) {
    case 'ADOPCION_URGENTE':
      return 'Adopción urgente';
    case 'CASOS_ESPECIALES':
      return 'Casos Especiales';
    case 'APADRINADO':
      return 'Apadrinado';
    case 'SIN_ESTADO':
      return '';
  }
}

</script>
<style lang="scss" scoped>
ion-col {
  text-align: center;
  background-color: var(--ion-card-background);
  margin: 10px;
  height: 265px;
  padding: 0;
  position: relative;

  .ver-ficha {
    position: absolute;
    width: 100%;
    bottom: 0;

    a {
      padding: 7px 0;
    }
  }

  h3 {
    font-family: "Ubuntu", sans-serif;
  }

  .contenedorImg {
    height: 130px;
    position: relative;

    h3 {
      position: absolute;
      top: 0;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }
  }

  a {
    background-color: #FF914D;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;
    text-decoration: none;
    border-radius: 0 0 5px 5px;
    color: white;
  }

  h1 {
    margin-top: 10px;
  }

  h3 {
    margin: 0;
    padding: 5px;
    font-size: 15px;
    position: relative;
    top: 0;
    border-radius: 5px 5px 0 0;
  }

  p {
    padding: 5px;
    height: 15%;
  }
}
</style>