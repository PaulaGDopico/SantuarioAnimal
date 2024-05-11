<template>
    <ion-page>
        <ion-content>
            <SubHeader
                titulo="¡Adopta, ama, y sé amado!"
                texto="En cada mirada, en cada movimiento, en cada latido, un animal en espera de adopción te ofrece un vínculo indeleble lleno de gratitud y afecto. Descubre el regalo incomparable de la compañía animal, y sé parte de una historia donde el amor encuentra su hogar. ¡Adopta hoy y cambia dos vidas para siempre!"
                img-url="/img/pexels-helena-lopes-1959054.jpg"
                infoBtn="Requisitos para adoptar"></SubHeader>
            <div class="content main-wrapper">
                <section class="filtros">
                    <form action="">
                        <h2>Tipo Animal</h2>
                        <ion-checkbox
                            v-model="filtros.tipoPerro"
                            label-placement="end"
                            name="perro"
                            id="perro"
                            >Perro</ion-checkbox
                        >
                        <br />
                        <ion-checkbox
                            v-model="filtros.tipoGato"
                            label-placement="end"
                            name="gato"
                            id="gato"
                            >Gato</ion-checkbox
                        >
                        <h2>Estado</h2>
                        <ion-checkbox
                            v-model="filtros.urgente"
                            label-placement="end"
                            name="urgente"
                            id="urgente"
                            >Adopción urgente</ion-checkbox
                        >
                        <br />
                        <ion-checkbox
                            v-model="filtros.especial"
                            label-placement="end"
                            name="especial"
                            id="especial"
                            >Casos especiales</ion-checkbox
                        >
                        <ion-checkbox
                            v-model="filtros.apadrinando"
                            label-placement="end"
                            name="apadrinando"
                            id="apadrinando"
                            >Apadrinando</ion-checkbox
                        >
                        <br />
                        <ion-checkbox
                            v-model="filtros.sinEstado"
                            label-placement="end"
                            name="sinEstado"
                            id="sinEstado"
                            >Sin clasificación</ion-checkbox
                        >
                        <h2>Sexo</h2>
                        <ion-checkbox
                            v-model="filtros.hembra"
                            label-placement="end"
                            name="hembra"
                            id="hembra"
                            >Hembra</ion-checkbox
                        ><br />
                        <ion-checkbox
                            v-model="filtros.macho"
                            label-placement="end"
                            name="macho"
                            id="macho"
                            >Macho</ion-checkbox
                        >
                        <h2>tamanyo</h2>
                        <select
                            name="tamanyo"
                            id="tamanyo"
                            v-model="filtros.tamanyo">
                            <option value="todos" selected>Todos</option>
                            <option value="mgrande">Muy grande</option>
                            <option value="grande">Grande</option>
                            <option value="mediano">Mediano</option>
                            <option value="pequeño">Pequeño</option>
                            <option value="mpequeño">Muy pequeño</option>
                        </select>
                        <h2>Peso</h2>
                        <div class="d-flex align-peso">
                            <label for="peso" class="peso">0</label>
                            <ion-range
                                aria-label="Range with pin"
                                :pin="true"
                                :pin-formatter="pinFormatter"
                                name="peso"
                                id="peso"
                                v-model="filtros.peso"></ion-range>
                            <label for="peso" class="peso">100</label>
                        </div>
                    </form>
                </section>
                <section class="listaAnimales">
                    <div class="cartasAnimal d-flex justify-content-center">
                        <AppCartaAnimal
                            v-for="animal in infoAnimal"
                            :key="animal.id"
                            :id="animal.id"
                            :animal="animal.tipo"
                            :estado-adopcion="animal.estado_adopcion"
                            :nombre="animal.nombre"
                            :raza="animal.raza"
                            :urlImg="API_FILE_URL + animal.img" />
                    </div>
                    <div class="d-flex justify-content-center paginacion">
                        <button @click="anteriorPag()" class="buttonPag">
                            Anterior
                        </button>
                        <button
                            v-for="(numero, index) in paginacion"
                            :key="index"
                            class="numberPag"
                            @click="clickPage(numero)">
                            {{ index + 1 }}
                        </button>
                        <button @click="siguientePag()" class="buttonPag">
                            Siguiente
                        </button>
                    </div>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { API_FILE_URL } from "@/middleware/secrets";
import SubHeader from "@/components/SubHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { IonPage, IonContent, IonCheckbox, IonRange } from "@ionic/vue";
import AppCartaAnimal from "@/components/AppCartaAnimal.vue";
import { onMounted, ref, watch } from "vue";
import { getAnimales, getAllAnimales } from "@/services/animal";
import { Animal } from "@/types/Animal";

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
    { deep: true }
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
    padding: 0px;
}

ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #ff914d;
    margin: 5px 0px;
}

.content {
    display: flex;

    .listaAnimales {
        width: 80%;

        .cartasAnimal {
            align-items: center;
            flex-wrap: wrap;

            .cartaAnimal {
                width: 15%;
            }
        }

        .paginacion {
            margin: 20px;

            .buttonPag {
                margin: 0px 10px;
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
                background-color: white;
                border-radius: 5px;
                padding: 5px 10px;
                margin: 5px;
            }
        }
    }

    .filtros {
        padding: 0px 35px;
        width: 20%;

        .peso {
            margin: 0px 15px;
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
