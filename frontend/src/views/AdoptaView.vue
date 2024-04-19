<template>
    <ion-page>
        <ion-content>
            <section class="subheader d-flex">
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam perspiciatis consequatur
                        est a
                        incidunt
                        rem ab, hic magni esse veniam ut corporis illusdfdsfsdfsdfsdfsdfsfdm maiores molestiae
                        temporibus
                        eveniet praesentium ad.
                    </p>
                    <RouterLink class="" :to="{ name: 'InfoAdopta' }">Requisitos para adoptar</RouterLink>
                </div>
            </section>
            <div class="content main-wrapper">
                <section class="filtros">
                    <form action="">
                        <h2>Tipo Animal</h2>
                        <ion-checkbox v-model="filtros.tipoPerro" label-placement="end" name="perro"
                            id="perro">Perro</ion-checkbox> <br>
                        <ion-checkbox v-model="filtros.tipoGato" label-placement="end" name="gato"
                            id="gato">Gato</ion-checkbox>
                        <h2>Estado</h2>
                        <ion-checkbox v-model="filtros.urgente" label-placement="end" name="urgente"
                            id="urgente">Adopción urgente</ion-checkbox>
                        <br>
                        <ion-checkbox v-model="filtros.especial" label-placement="end" name="especial"
                            id="especial">Casos
                            especiales</ion-checkbox>
                        <ion-checkbox v-model="filtros.apadrinando" label-placement="end" name="apadrinando"
                            id="apadrinando">Apadrinando</ion-checkbox> <br>
                        <ion-checkbox v-model="filtros.sinEstado" label-placement="end" name="sinEstado"
                            id="sinEstado">Sin
                            clasificación</ion-checkbox>
                        <h2>Sexo</h2>
                        <ion-checkbox v-model="filtros.hembra" label-placement="end" name="hembra"
                            id="hembra">Hembra</ion-checkbox><br>
                        <ion-checkbox v-model="filtros.macho" label-placement="end" name="macho"
                            id="macho">Macho</ion-checkbox>
                        <h2>Altura</h2>
                        <select name="altura" id="altura" v-model="filtros.altura">
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
                            <ion-range aria-label="Range with pin" :pin="true" :pin-formatter="pinFormatter" name="peso"
                                id="peso" v-model="filtros.peso"></ion-range>
                            <label for="peso" class="peso">100</label>
                        </div>
                    </form>
                </section>
                <section class="listaAnimales">
                    <div class="cartasAnimal d-flex justify-content-center">
                        <AppCartaAnimal v-for="animal in result" :id="1" :animal="animal.animal"
                            :estado-adopcion="animal.estado" :nombre="animal.Nombre" :raza="animal.raza"
                            :urlImg="animal.urlImg" />
                    </div>
                    <div class="d-flex justify-content-center paginacion">
                        <a :href="`http://localhost:8100/adopta/`" class="buttonPag">Anterior</a>
                        <a v-for="(numero, index) in paginas" class="numberPag"
                            :href="`http://localhost:8100/adopta/${numero}`">
                            {{ index + 1 }}
                        </a>
                        <a :href="`http://localhost:8100/adopta/`" class="buttonPag">Siguiente</a>
                    </div>
                </section>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import { IonPage, IonContent, IonCheckbox, IonRange } from '@ionic/vue';
import AppCartaAnimal from '@/components/AppCartaAnimal.vue';
import { computed, ref } from 'vue';

const pinFormatter = (value: any) => `${value}kg`;
const infoAnimal = ref([
    {
        animal: 'Perro',
        estado: 'adopcion-urgente',
        Nombre: 'Max',
        raza: 'Labrador Retriever',
        urlImg: '../../public/img/perro.jpg',
        altura: 'grande',
        sexo: 'macho',
        peso: 30
    },
    {
        animal: 'Gato',
        estado: 'apadrinado',
        Nombre: 'Luna',
        raza: 'Siamés',
        urlImg: '../../public/img/gato.jpg',
        altura: 'mediano',
        sexo: 'hembra',
        peso: 5
    },
    {
        animal: 'Perro',
        estado: 'casos-especiales',
        Nombre: 'Rocky',
        raza: 'Bulldog Francés',
        urlImg: '../../public/img/perro.jpg',
        altura: 'pequeño',
        sexo: 'macho',
        peso: 15
    },
    {
        animal: 'Gato',
        estado: 'sin-estado',
        Nombre: 'Simba',
        raza: 'Maine Coon',
        urlImg: '../../public/img/gato.jpg',
        altura: 'mgrande',
        sexo: 'macho',
        peso: 20
    },
    {
        animal: 'Perro',
        estado: 'casos-especiales',
        Nombre: 'Bella',
        raza: 'Poodle',
        urlImg: '../../public/img/perro.jpg',
        altura: 'pequeño',
        sexo: 'hembra',
        peso: 10
    },
    {
        animal: 'Gato',
        estado: 'adopcion-urgente',
        Nombre: 'Milo',
        raza: 'British Shorthair',
        urlImg: '../../public/img/gato.jpg',
        altura: 'mediano',
        sexo: 'macho',
        peso: 7
    },
    {
        animal: 'Perro',
        estado: 'sin-estado',
        Nombre: 'Coco',
        raza: 'Chihuahua',
        urlImg: '../../public/img/perro.jpg',
        altura: 'mpequeño',
        sexo: 'macho',
        peso: 3
    },
    {
        animal: 'Gato',
        estado: 'apadrinado',
        Nombre: 'Nina',
        raza: 'Persa',
        urlImg: '../../public/img/gato.jpg',
        altura: 'pequeño',
        sexo: 'hembra',
        peso: 6
    },
    {
        animal: 'Perro',
        estado: 'adopcion-urgente',
        Nombre: 'Duke',
        raza: 'Golden Retriever',
        urlImg: '../../public/img/perro.jpg',
        altura: 'grande',
        sexo: 'macho',
        peso: 35
    },
    {
        animal: 'Gato',
        estado: 'sin-estado',
        Nombre: 'Mia',
        raza: 'Ragdoll',
        urlImg: '../../public/img/gato.jpg',
        altura: 'mediano',
        sexo: 'hembra',
        peso: 8
    },
    {
        animal: 'Perro',
        estado: 'casos-especiales',
        Nombre: 'Lucky',
        raza: 'Border Collie',
        urlImg: '../../public/img/perro.jpg',
        altura: 'grande',
        sexo: 'macho',
        peso: 25
    },
    {
        animal: 'Gato',
        estado: 'adopcion-urgente',
        Nombre: 'Oreo',
        raza: 'Siamese Mix',
        urlImg: '../../public/img/gato.jpg',
        altura: 'mediano',
        sexo: 'macho',
        peso: 6
    },
    {
        animal: 'Perro',
        estado: 'adopcion-urgente',
        Nombre: 'Rex',
        raza: 'German Shepherd',
        urlImg: '../../public/img/perro.jpg',
        altura: 'grande',
        sexo: 'macho',
        peso: 40
    },
    {
        animal: 'Gato',
        estado: 'sin-estado',
        Nombre: 'Whiskers',
        raza: 'Tabby',
        urlImg: '../../public/img/gato.jpg',
        altura: 'pequeño',
        sexo: 'macho',
        peso: 4
    },
    {
        animal: 'Perro',
        estado: 'casos-especiales',
        Nombre: 'Bruno',
        raza: 'Boxer',
        urlImg: '../../public/img/perro.jpg',
        altura: 'grande',
        sexo: 'macho',
        peso: 30
    }
]);
const filtros = ref({
    tipoPerro: false,
    tipoGato: false,
    urgente: false,
    especial: false,
    apadrinando: false,
    sinEstado: false,
    hembra: false,
    macho: false,
    altura: 'todos',
    peso: 0
});
const paginas = ref(10)

const result = computed(() => {
    return infoAnimal.value.filter(animal => {
        return ( //Filtrar por tipo de animal
            (!filtros.value.tipoPerro && !filtros.value.tipoGato) ||
            (filtros.value.tipoPerro && animal.animal === 'Perro') ||
            (filtros.value.tipoGato && animal.animal === 'Gato')
        ) && ( //Filtrar por estado
                (!filtros.value.urgente && !filtros.value.especial && !filtros.value.apadrinando && !filtros.value.sinEstado) ||
                (filtros.value.urgente && animal.estado === 'adopcion-urgente') ||
                (filtros.value.especial && animal.estado === 'casos-especiales') ||
                (filtros.value.apadrinando && animal.estado === 'apadrinado') ||
                (filtros.value.sinEstado && animal.estado === 'sin-estado')
            ) && ( //Filtrar por genero
                (!filtros.value.hembra && !filtros.value.macho) ||
                (filtros.value.hembra && animal.sexo === 'hembra') ||
                (filtros.value.macho && animal.sexo === 'macho')
            ) && ( //Filtrar por peso
                (filtros.value.peso === 0) ||
                (filtros.value.peso == animal.peso)
            ) && ( //filtrar por alura
                (filtros.value.altura === 'todos') ||
                (filtros.value.altura == animal.altura)
            )
    });
});


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

.subheader {
    height: 40vh;
    background-image: url(/img/pexels-helena-lopes-1959054.jpg);
    background-size: cover;
    background-position: center;
    justify-content: end;
    align-items: center;

    div {
        width: 500px;
        margin-right: 160px;
        a {
            background-color: white;
            text-decoration: none;
            color: #ff914d;
            padding: 5px;
            border-radius: 5px;
        }
    }
}

.content {
    color: black;
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
