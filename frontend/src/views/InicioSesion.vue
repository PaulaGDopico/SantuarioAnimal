<template>
	<ion-page>
		<ion-content>
			<ion-grid class="fondo">
				<ion-row class="ion-justify-content-center">
					<div class="section-inicio">
						<section>
							<ion-grid>
								<ion-row
									class="ion-align-items-center ion-justify-content-center">
									<img
										src="/img/logo.png"
										alt=""
										class="logo" />
									<h1>Santuario Animal</h1>
								</ion-row>
							</ion-grid>
							<form
								class="ion-text-align-center"
								@submit.prevent="handleLogin">
								<ion-grid>
									<ion-row class="ion-justify-content-center">
										<div class="ion-text-center">
											<ion-input
												label="Email"
												label-placement="floating"
												fill="solid"
												placeholder="Introduce tu email"
												v-model="email"></ion-input>
											<ion-input
												label="Contraseña"
												label-placement="floating"
												fill="solid"
												type="password"
												placeholder="Introduce tu contraseña"
												v-model="password">
											</ion-input>
											<p
												class="ion-invalid"
												v-for="error in errors"
												:key="error">
												{{ error }}
											</p>
											<ion-button type="submit"
												>Iniciar Sesion</ion-button
											>
										</div>
									</ion-row>
								</ion-grid>
							</form>
						</section>
					</div>
				</ion-row>
			</ion-grid>
			<app-footer></app-footer>
		</ion-content>
	</ion-page>
</template>
<script setup lang="ts">
import {
	IonPage,
	IonContent,
	IonGrid,
	IonRow,
	IonInput,
	IonButton,
} from "@ionic/vue";
import AppFooter from "@/components/AppFooter.vue";
import { Login } from "@/services/auth";
import { Ref, ref } from "vue";

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const errors = ref();

const handleLogin = async () => {
	const loginResult = await Login(email.value, password.value);

	if (loginResult) {
		errors.value = loginResult;
	}
};
</script>
<style scoped lang="scss">
.ion-invalid {
	color: red;
}
.fondo {
	background-image: url(/img/sesionBackground.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	.section-inicio {
		margin: 100px auto;

		section {
			background-color: rgba(255, 255, 255, 0.733);
			padding: 40px;
			border-radius: 10px;
			border: 1px solid rgb(201, 201, 201);

			.logo {
				width: 4rem;
			}

			form {
				ion-input {
					margin: 5px;
				}
			}
		}
	}
}
</style>
