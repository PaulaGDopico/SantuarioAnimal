<template>
    <ion-button @click="setOpen(true)">Donar a {{ props.animalName }}</ion-button>

    <ion-modal :is-open="isOpen" :onDidDismiss="() => setOpen(false)">
        <ion-header>
            <ion-toolbar>
                <ion-title>REALIZAR DONACIÓN SOLIDARIA</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="setOpen(false)">Close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Causa</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Importe</ion-label>
                    <ion-input v-model="importeDonar" type="number" required></ion-input>
                </ion-item>
                <ion-item :class="{ 'ion-invalid': !isCardNumberValid }">
                    <ion-label position="floating">Número de Tarjeta</ion-label>
                    <ion-input v-model="creditCard.number" type="number" required></ion-input>
                </ion-item>
                <ion-item :class="{ 'ion-invalid': !isNameValid }">
                    <ion-label position="floating">Nombre en la Tarjeta</ion-label>
                    <ion-input v-model="creditCard.name" type="text" required></ion-input>
                </ion-item>
                <ion-item :class="{ 'ion-invalid': !isExpiryValid }">
                    <ion-label position="floating">Fecha de Vencimiento (MM/YY)</ion-label>
                    <ion-input v-model="creditCard.expiry" type="text" required></ion-input>
                </ion-item>
                <ion-item :class="{ 'ion-invalid': !isCvvValid }">
                    <ion-label position="floating">Código de Seguridad (CVV)</ion-label>
                    <ion-input v-model="creditCard.cvv" type="number" required></ion-input>
                </ion-item>
            </ion-list>
            <ion-button expand="block" @click="submitForm(props.animalId,importeDonar)">Enviar</ion-button>
            <p class="error">{{ errorisCardNumberValid }}</p>
            <p class="error">{{ errorisNameValid }}</p>
            <p class="error">{{ errorisExpiryValid }}</p>
            <p class="error">{{ errorisCvvValid }}</p>
        </ion-content>
    </ion-modal>
</template>

<script lang="ts" setup>
import { realizarDonacion } from "@/services/donacion";
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonTextarea,
    IonIcon,
    IonLabel
} from "@ionic/vue";
import { computed, ref } from "vue";
const props = defineProps<{
    animalId: string,
    animalName: string
}>();
const importeDonar = ref()

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);

// Datos de la tarjeta de crédito
const creditCard = ref({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
});
const errorisCardNumberValid = ref()
const errorisNameValid = ref()
const errorisExpiryValid = ref()
const errorisCvvValid = ref()
const errorimporteDonar = ref()
// Validaciones
const isCardNumberValid = computed(() => isValidCardNumber(creditCard.value.number));
const isNameValid = computed(() => creditCard.value.name.trim() !== '');
const isExpiryValid = computed(() => isValidExpiry(creditCard.value.expiry));
const isCvvValid = computed(() => isValidCvv(creditCard.value.cvv));

// Función para enviar el formulario (aquí puedes agregar la lógica de envío)
const submitForm = async (donacionId: string, dinero_necesario: number) => {
    errorisCardNumberValid.value = '';
    errorisExpiryValid.value = '';
    errorisCvvValid.value = '';
    if (!isCardNumberValid.value) {
        errorisCardNumberValid.value = 'La longitud debe ser de 16 dígitos';
    }
    if (!isExpiryValid.value) {
        errorisExpiryValid.value = 'Formato de fecha de caducidad Incorrecto. Asegurate de usar formato MM/YY.';
    }
    if (!isCvvValid.value) {
        errorisCvvValid.value = 'CVV No valido';
    }
    if (!isNameValid.value) {
        errorisNameValid.value = "La casilla de nombre no puede estar vacia"
    }
    if (importeDonar.value <= 0) {
        errorimporteDonar.value = "El importe debe ser mayor a 0€"
    }
    if (isCardNumberValid.value && isNameValid.value && isExpiryValid.value && isCvvValid.value) {
        try {
            const dineroNecesarioString:string = dinero_necesario.toString as unknown as string
            await realizarDonacion(donacionId, dineroNecesarioString);
        } catch (error) {
            console.error("Error al subir el animal:", error);
        }
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        alert('¡Gracias por donar a !' + props.animalName);
        //window.location.reload(); // Recargar la página
    }
};

// Función para validar el número de tarjeta de crédito
const isValidCardNumber = (number: string) => {
    return /^\d{16}$/.test(number);
};

// Función para validar la fecha de vencimiento (formato MM/YY)
const isValidExpiry = (expiry: string) => {
    return /^\d{2}\/\d{2}$/.test(expiry);
};

// Función para validar el código de seguridad (CVV)
const isValidCvv = (cvv: string) => {
    return /^\d{3,4}$/.test(cvv);
};

const donar = async (donacionId: string, dinero_necesario: string) => {

};
</script>
<style scoped lang="scss">
.error {
    color: red;
}
</style>
