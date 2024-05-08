<template>
	<section
		class="subheader d-flex"
		:style="`background-image:url(${prop.imgUrl})`">
		<div>
			<h1>{{ prop.titulo }}</h1>
			<p>{{ prop.texto }}</p>
			<RouterLink class="" :to="{ name: 'Adopta' }">{{
				prop.infoBtn
			}}</RouterLink>
		</div>
	</section>
</template>
<script setup lang="ts">
const prop = defineProps({
	titulo: String,
	texto: String,
	imgUrl: String,
	infoBtn: String,
});
</script>
<style lang="scss" scoped>
.subheader {
	height: 40vh;
	background-size: cover;
	background-position: center;
	justify-content: end;
	align-items: center;

	div {
		color: white;
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

@media (max-width: 599px) {
	div {
		margin-right: 0px !important;
		padding: 10px;
	}
}
</style>
