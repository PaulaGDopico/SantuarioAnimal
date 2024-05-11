<template>
    <ion-page>
        <ion-content>
            <SubHeader titulo="Únete a Nosotros Como Voluntario y Marca la Diferencia"
				texto="El tiempo que dedicas puede cambiar vidas. Únete a nuestro equipo de voluntarios y sé la voz, las manos y el corazón de los que no tienen voz. Desde pasear perros hasta alimentar gatitos, cada gesto cuenta en nuestra misión de proteger y cuidar a los animales más vulnerables. "
				img-url="/img/pexels-elif-tasli-889857993-20019531.jpg" infoBtn="Requisitos para adoptar"></SubHeader>
            <section class="container ion-padding">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <h2>Voluntariado</h2>
                            <p>
                                Necesitamos personas con ganas de ayudar a los
                                animales, ya sea paseando perros, acariciando
                                gatos, limpiando las instalaciones, haciendo
                                lavadoras, repartiendo comida, etc. Los
                                voluntarios son parte esencial para el
                                funcionamiento del refugio y requieren de un
                                compromiso a largo plazo con los animales. Si
                                quieres ser voluntario de la Liga y reúnes los
                                requisitos necesarios, haz clic en el formulario
                                que verás al final de esta página y rellenalo.
                            </p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <h3>Requisitos</h3>
                        </ion-col>
                        <ion-col>
                            <section>
                                <ion-icon
                                    :name="checkmark"
                                    :icon="checkmark"></ion-icon>
                                <ion-label
                                    >Ser puntual en el turno escogido</ion-label
                                >
                            </section>
                            <section>
                                <ion-icon
                                    :name="checkmark"
                                    :icon="checkmark"></ion-icon>
                                <ion-label>Ser mayor de edad</ion-label>
                            </section>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <h3>Turnos</h3>
                        </ion-col>
                        <ion-col>
                            <h4>Los turnos de voluntariado són:</h4>
                            <section>
                                <h5>Modalidad de gatos</h5>
                                <p>De lunes a domingo, de 9:30 a 13:30 h</p>
                            </section>
                            <section>
                                <h5>Modalidad de perros pequeños:</h5>
                                <p>
                                    Sábados y domingos, de 8 a 12h o de 13:30 a
                                    16h
                                </p>
                            </section>
                            <section>
                                <h5>Modalidad de gatos</h5>
                                <p>
                                    De lunes a viernes, de 8 a 12h o de 14:30h a
                                    18h Sábados y domingos, de 8 a 12h o de 13 a
                                    16h
                                </p>
                            </section>
                            <p>
                                En esta página informaremos periódicamente de
                                las necesidades que vayan surgiendo para cubrir
                                los turnos de voluntariado de perros y gatos.
                                Los turnos que no aparecen como opción en el
                                formulario están cerrados actualmente.
                            </p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </section>
            <section class="container orange ion-padding">
                <form action="" @submit.prevent="enviarFormulario">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <h2>Formulario de voluntariado</h2>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" size-sm="6">
                                <ion-col size="12">
                                    <ion-input
                                        label="Nombre"
                                        label-placement="floating"
                                        fill="solid"
                                        class="orange-input"
                                        placeholder="Introduce tu nombre"
                                        v-model="nombre"></ion-input>
                                    <p>{{ errors.nombre.value }}</p>
                                </ion-col>
                            </ion-col>
                            <ion-col size="12" size-sm="6">
                                <ion-col size="12">
                                    <ion-input
                                        label="Apellidos"
                                        label-placement="floating"
                                        fill="solid"
                                        class="orange-input"
                                        placeholder="Introduce tus apellidos"
                                        v-model="apellidos"></ion-input>
                                    <p>{{ errors.apellidos.value }}</p>
                                </ion-col>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" size-sm="6">
                                <ion-col size="12"
                                    ><ion-input
                                        label="Teléfono"
                                        label-placement="floating"
                                        fill="solid"
                                        class="orange-input"
                                        placeholder="Introduce tu teléfono"
                                        v-model="telefono"></ion-input>
                                    <p>{{ errors.telefono.value }}</p>
                                </ion-col>
                            </ion-col>

                            <ion-col size="12" size-sm="6">
                                <ion-col size="12">
                                    <ion-input
                                        label="Correo"
                                        label-placement="floating"
                                        fill="solid"
                                        class="orange-input"
                                        placeholder="Introduce tu correo"
                                        v-model="correo"></ion-input>
                                    <p>{{ errors.correo.value }}</p>
                                </ion-col>
                            </ion-col>
                            <ion-col size="12" size-sm="6">
                                <ion-col size="12"
                                    ><ion-input
                                        label="Fecha de nacimiento"
                                        label-placement="floating"
                                        fill="solid"
                                        class="orange-input"
                                        placeholder="Introduce tu fecha de nacimiento"
                                        type="date"
                                        v-model="fecha_nacimiento"></ion-input>
                                    <p>
                                        {{ errors.fecha_nacimiento.value }}
                                    </p></ion-col
                                ></ion-col
                            >
                        </ion-row>
                        <ion-row>
                            <ion-col size="12">
                                <ion-checkbox
                                    labelPlacement="end"
                                    v-model="politicaAceptada">
                                    <span class="ion-text-wrap"
                                        >He leído y acepto la política de
                                        privacidad. La finalidad de la recogida
                                        de datos es la de poder atender sus
                                        cuestiones, sin ceder sus datos a
                                        terceros. Tiene derecho a saber qué
                                        información tenemos sobre vosotros,
                                        corregirla o eliminarla tal y como se
                                        explica en nuestra política de
                                        privacidad. *</span
                                    >
                                </ion-checkbox>
                            </ion-col>
                            <ion-col size="12">
                                <p>{{ politicaAceptadaError }}</p>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-button type="submit"
                                    >Solicitar unirse</ion-button
                                >
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-toast
                        position="bottom"
                        :is-open="notificacionEnvioIsOpen"
                        :message="errors.envio.value"
                        :duration="5000"
                        @didDismiss="abrirNotificacionEnvio(false)"></ion-toast>
                </form>
            </section>
            <app-footer></app-footer>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { enviarMail } from "@/services/mail";
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonButton,
    IonInput,
    IonCheckbox,
    IonToast,
} from "@ionic/vue";
import { checkmark } from "ionicons/icons";
import { ref, watch } from "vue";
const notificacionEnvioIsOpen = ref(false);
const abrirNotificacionEnvio = (state: boolean) => {
    notificacionEnvioIsOpen.value = state;
};
const nombre = ref("");
const apellidos = ref("");
const telefono = ref("");
const correo = ref("");
const fecha_nacimiento = ref("");

const errors = {
    nombre: ref(""),
    apellidos: ref(""),
    telefono: ref(""),
    correo: ref(""),
    fecha_nacimiento: ref(""),
    politicaAceptada: ref(""),
    envio: ref(""),
};

const politicaAceptada = ref();

const politicaAceptadaError = ref();
function validarTelefono(newTelefono: string) {
    const telefonoRegex = /^\d{9}$/; // Ajusta esta expresión regular según tus requisitos
    return telefonoRegex.test(newTelefono.trim());
}

function validarCorreo(newCorreo: string) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar correo electrónico
    return correoRegex.test(newCorreo.trim());
}

function validarFechaNacimiento() {
    const fechaNacimiento = new Date(fecha_nacimiento.value);
    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
    return edad >= 18;
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
    errors.fecha_nacimiento.value = validarFechaNacimiento()
        ? ""
        : "Debes ser mayor de edad";

    if (!politicaAceptada.value) {
        politicaAceptadaError.value = "Debes aceptar la política de privacidad";
    } else {
        politicaAceptadaError.value = "";
    }

    if (
        errors.nombre.value ||
        errors.apellidos.value ||
        errors.telefono.value ||
        errors.correo.value ||
        errors.fecha_nacimiento.value ||
        politicaAceptadaError.value
    ) {
        // Manejar el caso en que haya errores de validación
        return false;
    } else {
        return true;
    }
}

function enviarFormulario() {
    if (!validarFormulario()) {
        errors.envio.value = "No se ha podido enviar el voluntario";
        abrirNotificacionEnvio(true);
        return;
    }
    const mensaje = `
	UN USUARIO QUIERE SER VOLUNTARIO: 
	Nombre y apellidos: ${nombre.value} ${apellidos.value} 
	Telefono: ${telefono.value}
	Correo: ${correo.value}
	Fecha de nacimiento: ${fecha_nacimiento.value}
	`;
    //console.log(mensaje);
    enviarMail(
        mensaje,
        "Voluntariado",
        "notificacionessantuarioanimal@gmail.com"
    );
    errors.envio.value = "Felicidades, te has inscrito correctamente.";
        abrirNotificacionEnvio(true);
}

//Watchers para revisar los cambios en cada  campo

// Watcher para el campo 'nombre'
watch(nombre, (newValue) => {
    errors.nombre.value = newValue.trim() ? "" : "Nombre requerido";
});

// Watcher para el campo 'apellidos'
watch(apellidos, (newValue) => {
    errors.apellidos.value = newValue.trim() ? "" : "Apellidos requeridos";
});

// Watcher para el campo 'telefono'
watch(telefono, (newValue) => {
    errors.telefono.value = validarTelefono(newValue)
        ? ""
        : "Teléfono inválido";
});

// Watcher para el campo 'correo'
watch(correo, (newValue) => {
    errors.correo.value = validarCorreo(newValue) ? "" : "Correo inválido";
});

// Watcher para el campo 'fecha_nacimiento'
watch(fecha_nacimiento, (newValue) => {
    errors.fecha_nacimiento.value = newValue
        ? ""
        : "Fecha de nacimiento requerida";
    errors.fecha_nacimiento.value = validarFechaNacimiento()
        ? ""
        : "Debes ser mayor de edad";
});
</script>

<style lang="scss">
.subheader {
    height: 50vh;
    background-image: url(/img/pexels-umit-ozbek-140134.jpg);
    background-size: cover;
    background-position: center;
    justify-content: start;
    display: flex;
    align-items: center;

    div {
        width: 90%;
        text-align: end;
    }
}
.container {
    margin: 5vh 10vw;
    background-color: var(--ion-card-background);
    border-bottom: 10px solid var(--ion-color-primary);
}
.orange {
    background-color: var(--ion-color-primary);
}
</style>
