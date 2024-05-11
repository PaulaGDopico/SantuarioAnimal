<template>
  <ion-page>
    <ion-content>
      <SubHeader img-url="/img/pexels-andreas-246992646-19967972.jpg"
                 infoBtn="Requisitos para adoptar"
                 texto="Cada criatura, con sus ojos llenos de historias por contar, aguarda ansiosamente el toque cálido de un nuevo amigo humano. Únete a nosotros en esta misión de amor y compasión, donde cada adopción es un acto de rescate mutuo. Contacta con nuestra protectora hoy mismo y sé el cambio que el mundo necesita, un abrazo a la vez."
                 titulo="Un Hogar, un Corazón"></SubHeader>
      <div>
        <section class="info container">
          <ion-grid>
            <ion-row>
              <ion-col class="ion-padding" size="12" size-sm="6">
                <iframe
                    class="map"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47859.71994730065!2d2.061814069747932!3d41.43417660988949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a497f1b497f215%3A0x49d2d6b706b90165!2sCentro%20de%20Acogida%20de%20Animales%20de%20Compa%C3%B1%C3%ADa%20de%20Barcelona!5e0!3m2!1ses!2ses!4v1713364793950!5m2!1ses!2ses"
                    style="border: 0"></iframe>
              </ion-col>
              <ion-col class="ion-padding" size="12" size-sm="6">
                <ion-row>
                  <ion-col>
                    <h2>Santuario animal</h2>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col
                      class="contact-info"
                      size="12"
                      size-sm="6">
                    <ion-row
                        class="ion-justify-content-center">
                      <ion-col size="auto">
                        <ion-icon
                            :icon="pin"
                            :name="pin"></ion-icon>
                      </ion-col>
                      <ion-col>
                        <ion-label
                        >Carrer portugal,
                          22
                        </ion-label
                        >
                      </ion-col>
                    </ion-row>
                    <ion-row
                        class="ion-justify-content-center">
                      <ion-col size="auto">
                        <ion-icon
                            :icon="call"
                            :name="call"></ion-icon>
                      </ion-col>
                      <ion-col>
                        <ion-label
                        >+34 999 888 777
                        </ion-label
                        >
                      </ion-col>
                    </ion-row>
                    <ion-row
                        class="ion-justify-content-center">
                      <ion-col size="auto">
                        <ion-icon
                            :icon="mail"
                            :name="mail"></ion-icon>
                      </ion-col>
                      <ion-col>
                        <ion-label
                        >info@santuarioAnimal.cat
                        </ion-label
                        >
                      </ion-col>
                    </ion-row>
                  </ion-col>
                  <ion-col class="horario-adoptar">
                    <ion-row>
                      <ion-col
                          class="ion-text-center"
                          size="auto">
                        <ion-icon
                            :icon="calendar"
                            :name="calendar"></ion-icon>
                      </ion-col>
                      <ion-col>
                        <ion-label>
                          Horario para adoptar
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col>
                        <section class="">
                          <b>Lunes - Viernes</b>
                          <p>Gatos: 10 a 15:30h</p>
                          <p>
                            Perros: 9 a 12h y de
                            14:30 a 17:30h
                          </p>
                        </section>
                        <section class="">
                          <b
                          >Sábados, Domingos y
                            festivos</b
                          >
                          <p>
                            8 a 12h y de 13:30 a
                            15:30h
                          </p>
                        </section>
                      </ion-col>
                    </ion-row>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <p>
                      Estamos al final de la Av. Tibidabo,
                      a pocos metros de la estación del
                      Funicular del Tibidabo.
                    </p>
                    <p>
                      Podéis llegar hasta la Av. Tibidabo
                      con los trenes FGC, línea L7 (con
                      origen en Plaza Catalunya) y después
                      tomar el autobús 196 apeándoos
                      delante de la estación del funicular
                      (Plaza Dr. Andreu).
                    </p>
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </section>
        <section class="contact-form container ion-padding">
          <form action="" @submit.prevent="enviarFormulario()">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2>Información de contacto</h2>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12" size-sm="6"
                >
                  <ion-input
                      v-model="nombre"
                      fill="solid"
                      label="Nombre"
                      label-placement="floating"
                      placeholder="Introduce tu nombre"></ion-input
                  >
                  <p>{{ errors.nombre.value }}</p>
                </ion-col>
                <ion-col size="12" size-sm="6"
                >
                  <ion-input
                      v-model="apellidos"
                      fill="solid"
                      label="Apellidos"
                      label-placement="floating"
                      placeholder="Introduce tus apellidos"></ion-input
                  >
                  <p>{{ errors.apellidos.value }}</p>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12" size-sm="6"
                >
                  <ion-input
                      v-model="telefono"
                      fill="solid"
                      label="Teléfono"
                      label-placement="floating"
                      placeholder="Introduce tu teléfono"></ion-input
                  >
                  <p>{{ errors.telefono.value }}</p>
                </ion-col>
                <ion-col size="12" size-sm="6"
                >
                  <ion-input
                      v-model="correo"
                      fill="solid"
                      label="Correo"
                      label-placement="floating"
                      placeholder="Introduce tu correo"></ion-input
                  >
                  <p>{{ errors.correo.value }}</p>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col><h2>Asunto</h2></ion-col>
              </ion-row>
              <ion-row>
                <ion-col
                >
                  <ion-input
                      v-model="titulo"
                      fill="solid"
                      label="Título"
                      label-placement="floating"
                      placeholder="Introduce el título"></ion-input
                  >
                  <p>{{ errors.titulo.value }}</p>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-textarea
                      v-model="mensaje"
                      fill="solid"
                      label="Mensaje"
                      label-placement="floating"
                      placeholder="Introduce el mensaje"></ion-textarea
                  >
                  <p>{{ errors.mensaje.value }}</p>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-button type="submit">
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
        </section>
      </div>
      <app-footer></app-footer>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import AppFooter from "@/components/AppFooter.vue";
import SubHeader from "@/components/SubHeader.vue";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTextarea,
  IonToast,
} from "@ionic/vue";
import {calendar, call, mail, pin} from "ionicons/icons";
import {ref, watch} from "vue";
import {enviarMail} from "@/services/mail";
//Configuración de la notificación
const notificacionEnvioIsOpen = ref(false);
const abrirNotificacionEnvio = (state: boolean) => {
  notificacionEnvioIsOpen.value = state;
};

//Refs del formulario
const nombre = ref("")
const apellidos = ref("");
const telefono = ref("");
const correo = ref("");
const titulo = ref("");
const mensaje = ref("");

//errores
const errors = {
  nombre: ref(""),
  apellidos: ref(""),
  telefono: ref(""),
  correo: ref(""),
  titulo: ref(""),
  mensaje: ref(""),
  envio: ref(""),
}

function validarTelefono(newTelefono: string) {
  const telefonoRegex = /^\d{9}$/;
  return telefonoRegex.test(newTelefono.trim());
}

function validarCorreo(newCorreo: string) {
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(newCorreo.trim());
}

function validarFormulario() {
  errors.nombre.value = nombre.value.trim() ? "" : "Nombre requerido";
  errors.apellidos.value = apellidos.value.trim()
      ? ""
      : "Apellidos requeridos";
  errors.telefono.value = validarTelefono(telefono.value)
      ? ""
      : "Teléfono inválido";
  errors.correo.value = validarCorreo(correo.value) ? "" : "Correo inválido";
  errors.mensaje.value = mensaje.value.trim() ? "" : "Mensaje requerido"
  errors.titulo.value = titulo.value.trim() ? "" : "Título requerido"
  return !(errors.nombre.value ||
      errors.apellidos.value ||
      errors.telefono.value ||
      errors.correo.value ||
      errors.mensaje.value ||
      errors.titulo.value);
}

function enviarFormulario() {
  if (!validarFormulario()) {
    errors.envio.value = "No se ha podido enviar el mensaje";
    abrirNotificacionEnvio(true);
    return;
  }
  const mensajeDeContacto = `
	UN USUARIO QUIERE CONTACTAR CON NOSOTROS:
	Nombre y apellidos: ${nombre.value} ${apellidos.value}
	Telefono: ${telefono.value}
	Correo: ${correo.value}

	----- ${titulo.value} -----
	${mensaje.value}
	`;
  //console.log(mensaje);
  enviarMail(
      mensajeDeContacto,
      `Mensaje de contacto de ${nombre.value} ${apellidos.value}`,
      "notificacionessantuarioanimal@gmail.com"
  );
  errors.envio.value = "El mensaje se ha enviado correctamente.";
  abrirNotificacionEnvio(true);
}

//Watchers para revisar los cambios en cada campo
watch(nombre, (newValue) => {
  errors.nombre.value = newValue.trim() ? "" : "Nombre requerido";
});
watch(apellidos, (newValue) => {
  errors.apellidos.value = newValue.trim() ? "" : "Apellidos requeridos";
});
watch(telefono, (newValue) => {
  errors.telefono.value = validarTelefono(newValue)
      ? ""
      : "Teléfono inválido";
});
watch(correo, (newValue) => {
  errors.correo.value = validarCorreo(newValue) ? "" : "Correo inválido";
});
watch(titulo, (newValue) => {
  errors.titulo.value = newValue.trim() ? "" : "Título requerido"
})
watch(mensaje, (newValue) => {
  errors.titulo.value = newValue.trim() ? "" : "Mensaje requerido"
})

</script>

<style lang="scss" scoped>

.container {
  margin: 5vh 10vw;
  background-color: var(--ion-card-background);
  border-bottom: 10px solid var(--ion-color-primary);

  .map {
    width: 100%;
    height: 100%;
  }
}

.info {
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  h2 {
    color: var(--ion-color-primary);
  }

  h3 {
    padding: 10px 0;
  }
}
</style>
