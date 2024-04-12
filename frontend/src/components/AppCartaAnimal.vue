<template>
    <article class="cartaAnimal">
        <h3 :class="props.estadoAdopcion">{{ props.estadoAdopcion }}</h3>
        <div class="contenedorImg">
            <img :src="props.urlImg" alt="Foto animal">
        </div>
        <h1>{{props.nombre}}</h1>
        <p>{{props.animal}} | {{props.raza}}</p>
        <a href="#">Ver Ficha</a>
    </article>
</template>
<script setup lang="ts">
const props = defineProps({
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
</script>
<style lang="scss" scoped>
article {
    color: black;
    text-align: center;
    background-color: white;
    margin: 10px;
    height: 265px;
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
        color: white;
        text-decoration: none;
        border-radius: 0px 0px 5px 5px;
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
    }
}
</style>