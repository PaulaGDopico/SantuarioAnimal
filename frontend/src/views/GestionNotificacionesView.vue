<template>
  <ion-page>
    <ion-content>
      <div class="main">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-lg="2">
              <router-link :to="{ name: 'gestion' }"
              >
                <ion-button class="boton-atras">
                  Volver atrás
                </ion-button>
              </router-link
              >
            </ion-col>
            <ion-col>
              <div class="notificacion">
                <h1>Formulario de notificaciones</h1>
                <form action="" @submit.prevent="enviarFormulario">
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                        <ion-list>
                          <ion-item>
                            <ion-select v-if="afiliados"
                                        v-model="emails"
                                        :multiple="true"
                                        aria-label="Correo"
                                        placeholder="Selecciona los correos a los que quieres enviar la notificación">
                              <ion-select-option v-for="afiliado in afiliados" :key="afiliado.id"
                                                 :value="afiliado.email">
                                {{ afiliado.email }}
                              </ion-select-option>

                            </ion-select>
                          </ion-item>
                        </ion-list>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col
                      >
                        <ion-input
                            v-model="issue"
                            fill="solid"
                            label="Asunto"
                            label-placement="floating"
                            placeholder="Introduce el asunto del mensaje"></ion-input
                        >
                        <p>{{ errors.issue.value }}</p>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col>
                        <ion-textarea
                            v-model="description"
                            class="textarea"
                            fill="solid"
                            label="Mensaje"
                            label-placement="floating"
                            placeholder="Introduce el mensaje"></ion-textarea
                        >
                        <p>{{ errors.description.value }}</p>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col>
                        <ion-button
                            type="submit">
                          Enviar mensaje
                        </ion-button>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                  <ion-toast
                      :duration="5000"
                      :is-open="notificacionEnvioIsOpen"
                      :message="errors.envio.value"
                      position="bottom"
                      @didDismiss="abrirNotificacionEnvio(false)"></ion-toast>
                </form>
              </div>
            </ion-col>

          </ion-row>
        </ion-grid>


      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import AppFooter from "@/components/AppFooter.vue";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToast,
} from "@ionic/vue";
import {onMounted, ref, Ref, watch} from "vue";
import {enviarMail} from "@/services/mail";
import {getAfiliados} from "@/services/afiliado";
import {Afiliado} from "@/types/Afiliado";


const afiliados = ref<Array<Afiliado>>()
const notificacionEnvioIsOpen = ref(false);
const abrirNotificacionEnvio = (state: boolean) => {
  notificacionEnvioIsOpen.value = state;
};
const emails: Ref<Array<string>> = ref([]);
const issue: Ref<string> = ref("");
const description: Ref<string> = ref("");


const errors = {
  issue: ref(""),
  description: ref(""),
  envio: ref(""),
  mailErrors: ref<Array<string>>()
}

function validarFormulario() {
  errors.issue.value = issue.value.trim() ? "" : "Asunto requerido";
  errors.description.value = description.value.trim()
      ? ""
      : "Descripción requerida";


  return !(errors.issue.value ||
      errors.description.value
  );
}

const handleNotification = async () => {
      const notification = {
        emails: emails.value,
        issue: issue.value,
        description: description.value,
      };
      await enviarMail(notification.description, notification.issue, notification.emails.join(","));
    }
;


function enviarFormulario() {
  if (!validarFormulario()) {
    errors.envio.value = "No se ha podido enviar el mensaje";
    abrirNotificacionEnvio(true);
    return;
  }
  handleNotification()
  errors.envio.value = "El mensaje ha sido enviado.";
  abrirNotificacionEnvio(true);
}

onMounted(async () => {
  afiliados.value = await getAfiliados()
  console.log(afiliados.value)
});
watch(issue, (newValue) => {
  errors.issue.value = newValue.trim() ? "" : "Asunto requerido"
})
watch(description, (newValue) => {
  errors.description.value = newValue.trim() ? "" : "Descripción requerida"
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: row;

  .boton-atras {
    margin-left: 10px;
    margin-top: 30px;
  }

  .notificacion {

    h1 {
      margin-left: 10px;
      margin-bottom: 20px;
    }

    form {
      width: 70%;

      .textarea {
        min-height: 200px;
      }
    }

    margin-bottom: 70px;
  }
}
</style>
