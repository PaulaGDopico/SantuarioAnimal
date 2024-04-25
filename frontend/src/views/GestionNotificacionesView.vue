<template>
    <ion-page>
        <ion-content>
            <div class="main">
                <nav class="menuLateral">
                    <ul>
                        <router-link :to="{name:'gestion'}"><button class="atras">Volver atrás</button></router-link>
                        <!-- <li class="enviados">Enviados</li>
                        <li class="recibidos">Recibidos</li>
                        <li class="destacados">Destacados</li>
                        <li class="borrados">Borrados</li> -->
                    </ul>
                </nav>
                <div class="notificacion">
                    <h1>Formulario de notificaciones</h1>
                    <form action="">
						<ion-grid>
                            <ion-row>
								<ion-col>
                                    <ion-list>
                                        <ion-item>
                                            <ion-select aria-label="Correo" placeholder="Selecciona los correos a los que quieres enviar la notificación" :multiple="true">
                                                <ion-select-option value="correo1">arnau@arnau.com</ion-select-option>
                                                <ion-select-option value="correo2">paula@paula.com</ion-select-option>
                                                <ion-select-option value="correo3">jose@jose.com</ion-select-option>
                                            </ion-select>
                                        </ion-item>
                                    </ion-list>
								</ion-col>
							</ion-row>
							<ion-row>
								<ion-col
									><ion-input
										label="Asunto"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce el asunto del mensaje"></ion-input
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<ion-textarea
										label="Mensaje"
										label-placement="floating"
										fill="solid"
										placeholder="Introduce el mensaje"
                                        class="textarea"
                                        ></ion-textarea
								></ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<input
										type="file"
										name="images"
										id="images" />
								</ion-col>
							</ion-row>
							<ion-row>
								<ion-col>
									<ion-button type="submit"
										>Enviar mensaje</ion-button
									>
								</ion-col>
							</ion-row>
						</ion-grid>
					</form>
                </div>
            </div>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
    import AppFooter from '@/components/AppFooter.vue';
    import { IonPage, IonContent, 
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
        IonInput,
        IonTextarea,
        IonItem, 
        IonList, 
        IonSelect, 
        IonSelectOption 
    } from "@ionic/vue";

</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: white;
        .menuLateral{
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            margin-left: 60px;
            ul{
                list-style: none;
                width: 100%;
                .atras{
                width: 40%;
                padding-top: 10px;
                padding-bottom: 10px;
                background-color: #FF914D;
                color: white;
                margin-bottom: 40px;
                font-size: large;
                }
            }
        }
        .notificacion{
            width: 70%;
            padding-top: 50px;
            h1{
                margin-left: 10px;
                margin-bottom: 20px;
            }
            svg{
                width: 15px;
                position: relative;
                top: 40px;
                z-index: 1;
                right: -96%;
            }
            form{
                width: 70%;
                .email{
                    margin-bottom: 0;
                }
                .textarea{
                    min-height: 200px;
                }
            }
            margin-bottom: 70px;
        }
    }
</style>