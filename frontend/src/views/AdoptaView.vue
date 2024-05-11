<template>
  <ion-page>
    <ion-content>
      <SubHeader
          img-url="/img/pexels-helena-lopes-1959054.jpg"
          infoBtn="Requisitos para adoptar"
          texto="En cada mirada, en cada movimiento, en cada latido, un animal en espera de adopción te ofrece un vínculo indeleble lleno de gratitud y afecto. Descubre el regalo incomparable de la compañía animal, y sé parte de una historia donde el amor encuentra su hogar. ¡Adopta hoy y cambia dos vidas para siempre!"
          titulo="¡Adopta, ama, y sé amado!"></SubHeader>
      <div class="content main-wrapper">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-md="3">
              <section class="filtros">
                <form action="">
                  <h2>Tipo Animal</h2>
                  <ion-checkbox
                      id="perro"
                      v-model="filtros.tipoPerro"
                      label-placement="end"
                      name="perro"
                  >Perro
                  </ion-checkbox
                  >
                  <br/>
                  <ion-checkbox
                      id="gato"
                      v-model="filtros.tipoGato"
                      label-placement="end"
                      name="gato"
                  >Gato
                  </ion-checkbox
                  >
                  <h2>Estado</h2>
                  <ion-checkbox
                      id="urgente"
                      v-model="filtros.urgente"
                      label-placement="end"
                      name="urgente"
                  >Adopción urgente
                  </ion-checkbox
                  >
                  <br/>
                  <ion-checkbox
                      id="especial"
                      v-model="filtros.especial"
                      label-placement="end"
                      name="especial"
                  >Casos especiales
                  </ion-checkbox
                  >
                  <br/>
                  <ion-checkbox
                      id="apadrinando"
                      v-model="filtros.apadrinando"
                      label-placement="end"
                      name="apadrinando"
                  >Apadrinando
                  </ion-checkbox
                  >
                  <br/>
                  <ion-checkbox
                      id="sinEstado"
                      v-model="filtros.sinEstado"
                      label-placement="end"
                      name="sinEstado"
                  >Sin clasificación
                  </ion-checkbox
                  >
                  <h2>Sexo</h2>
                  <ion-checkbox
                      id="hembra"
                      v-model="filtros.hembra"
                      label-placement="end"
                      name="hembra"
                  >Hembra
                  </ion-checkbox
                  >
                  <br/>
                  <ion-checkbox
                      id="macho"
                      v-model="filtros.macho"
                      label-placement="end"
                      name="macho"
                  >Macho
                  </ion-checkbox
                  >
                  <h2>Tamaño</h2>
                  <select
                      id="tamanyo"
                      v-model="filtros.tamanyo"
                      name="tamanyo">
                    <option selected value="todos">Todos</option>
                    <option value="mgrande">Muy grande</option>
                    <option value="grande">Grande</option>
                    <option value="mediano">Mediano</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mpequeño">Muy pequeño</option>
                  </select>
                  <h2>Peso</h2>
                  <div class="d-flex align-peso">
                    <label class="peso" for="peso">0</label>
                    <ion-range
                        id="peso"
                        v-model="filtros.peso"
                        :pin="true"
                        :pin-formatter="pinFormatter"
                        aria-label="Range with pin"
                        name="peso"></ion-range>
                    <label class="peso" for="peso">100</label>
                  </div>
                </form>
              </section>
            </ion-col>
            <ion-col size="12" size-md="9">
              <section class="listaAnimales">
                <ion-grid>
                  <ion-row class="cartasAnimal">

                    <AppCartaAnimal
                        v-for="animal in infoAnimal"
                        :id="animal.id"
                        :key="animal.nombre"
                        :animal="animal.tipo"
                        :estado-adopcion="animal.estado_adopcion"
                        :nombre="animal.nombre"
                        :raza="animal.raza"
                        :urlImg="API_FILE_URL + animal.img"/>
                  </ion-row>
                </ion-grid>
                <div class="d-flex justify-content-center paginacion">
                  <button class="buttonPag" @click="anteriorPag()">
                    Anterior
                  </button>
                  <button
                      v-for="(numero, index) in paginacion"
                      :key="index"
                      class="numberPag"
                      @click="clickPage(numero)">
                    {{ index + 1 }}
                  </button>
                  <button class="buttonPag" @click="siguientePag()">
                    Siguiente
                  </button>
                </div>
              </section>
            </ion-col>
          </ion-row>
        </ion-grid>

      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import {API_FILE_URL} from "@/middleware/secrets";
import SubHeader from "@/components/SubHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {IonCheckbox, IonContent, IonGrid, IonPage, IonRange, IonRow} from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import {onMounted, ref, watch} from "vue";
import {getAllAnimales, getAnimales} from "@/services/animal";
import {Animal} from "@/types/Animal";

const pinFormatter = (value: any) => `${value}kg`;
const infoAnimal = ref<Animal[] | null>(null);

const paginacion = ref(); //cantidad de paginas
const paginaActual = ref(1); //pagina actual
const filtros = ref({
  tipoPerro: false,
  tipoGato: false,
  urgente: false,
  especial: false,
  apadrinando: false,
  sinEstado: false,
  hembra: false,
  macho: false,
  tamanyo: "todos",
  peso: 0,
});
watch(
    filtros,
    async () => {
      console.log(filtros.value.tamanyo);
      const animals = await getAnimales(paginaActual.value, filtros.value);
      if (Array.isArray(animals)) {
        infoAnimal.value = animals;
      } else {
        console.error("Error: Array de animales vacio");
        infoAnimal.value = null;
      }
      if (animals) {
        paginacion.value = Math.ceil(animals.length / 20);
        console.log(animals.length); // Suponiendo que hay 20 animales por página
      } else {
        // Manejar el caso en que response es undefined
        console.error("Error: La respuesta de getAllAnimales es undefined");
      }
    },
    {deep: true}
);
onMounted(async () => {
  const animals = await getAnimales(paginaActual.value, filtros.value);
  if (Array.isArray(animals)) {
    infoAnimal.value = animals;
  } else {
    console.error("Error: Array de animales vacio");
    infoAnimal.value = null;
  }
  const response = await getAllAnimales();
  if (response) {
    paginacion.value = Math.ceil(response.length / 20); // Suponiendo que hay 20 animales por página
    console.log(response.length);
  } else {
    // Manejar el caso en que response es undefined
    console.error("Error: La respuesta de getAllAnimales es undefined");
  }
});

async function siguientePag() {
  paginaActual.value++;
  if (paginaActual.value < paginacion.value) {
    const animals = await getAnimales(paginaActual.value, filtros.value);
    if (Array.isArray(animals)) {
      infoAnimal.value = animals;
    } else {
      console.error("Error: Array de animales vacio");
      infoAnimal.value = null;
    }
  }
}

async function anteriorPag() {
  if (paginaActual.value >= 1) {
    paginaActual.value--;
    if (paginaActual.value < paginacion.value) {
      const animals = await getAnimales(
          paginaActual.value,
          filtros.value
      );
      if (Array.isArray(animals)) {
        infoAnimal.value = animals;
      } else {
        console.error("Error: Array de animales vacio");
        infoAnimal.value = null;
      }
    }
  }
}

async function clickPage(pagina: number) {
  paginaActual.value = pagina;
  const animals = await getAnimales(paginaActual.value, filtros.value);
  if (Array.isArray(animals)) {
    infoAnimal.value = animals;
  } else {
    console.error("Error: Array de animales vacio");
    infoAnimal.value = null;
  }
}
</script>
<style lang="scss">
.align-peso {
  align-items: center;
}

ion-checkbox {
  --size: 32px;
}

#peso {
  padding: 0;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #ff914d;
  margin: 5px 0;
}

.content {
  display: flex;

  .listaAnimales {

    .cartasAnimal {
      align-items: center;
      flex-wrap: wrap;
    }

    .paginacion {
      margin: 20px;

      .buttonPag {
        margin: 0 10px;
        color: white;
        padding: 5px;
        background-color: #ff914d;
        border-radius: 5px;
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      .numberPag {
        text-decoration: none;
        border-radius: 5px;
        border: 1px solid black;
        padding: 10px 10px;
      }
    }
  }

  .filtros {
    padding: 0 35px;

    .peso {
      margin: 0 15px;
    }

    input[type="checkbox"] {
      background-color: white !important;
    }

    select {
      padding: 5px;
      border-radius: 6px;
      border: 2px solid #ff914d;
      background-color: white;
    }
  }
}
</style>
