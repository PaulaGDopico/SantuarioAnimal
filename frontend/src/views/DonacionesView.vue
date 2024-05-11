<template>
  <ion-page>
    <ion-content>
      <SubHeader img-url="/img/pexels-ricardo-martinez-gonzalez-214380188-11910797.jpg"
                 infoBtn="Requisitos para adoptar"
                 texto="Cada gesto de generosidad es un paso hacia un mundo más compasivo. Con tu donación, no solo brindas comida, refugio y cuidado médico a los animales necesitados, sino que también les das una segunda oportunidad para vivir una vida plena y feliz. "
                 titulo="Dona y Cambia Vidas en Nuestra Protectora de Animales"></SubHeader>
      <section class="donativos container ion-padding">
        <h2>Donativos</h2>
        <p>
          Puedes ayudarnos realizando una aportación económica, ya que
          con ello ayudarás, y mucho, a que podamos continuar con
          nuestra labor y con el mantenimiento de nuestro refugio.
        </p>
        <ion-accordion-group>
          <ion-accordion value="first">
            <ion-item slot="header">
              <ion-label>Marco Legal</ion-label>
            </ion-item>
            <div slot="content" class="ion-padding">
              <p>
                Nombre legal: Santuario Animal "Un Hogar para
                Todos"<br/>
                Dirección física: Calle Principal, Ciudad,
                País<br/>
                Número de registro: 123456789
              </p>
              <p>
                La Santuario Animal "Un Hogar para Todos" es una
                organización sin fines de lucro registrada como
                asociación benéfica. Todos los fondos donados se
                utilizan exclusivamente para el cuidado y el
                bienestar de los animales en el refugio,
                cumpliendo con todas las regulaciones legales y
                fiscales.
              </p>
            </div>
          </ion-accordion>
          <ion-accordion value="second">
            <ion-item slot="header">
              <ion-label>Condiciones</ion-label>
            </ion-item>
            <div slot="content" class="ion-padding">
              <p>
                Política de privacidad: La Santuario Animal "Un
                Hogar para Todos" se compromete a proteger la
                privacidad de los datos personales
                proporcionados durante el proceso de donación.
                Los datos se utilizan únicamente para procesar
                la donación y para comunicarse con el donante
                sobre el trabajo de la organización.
              </p>
              <p>
                Términos y condiciones de las donaciones: Las
                donaciones realizadas son voluntarias y no
                reembolsables. Los donantes pueden solicitar un
                reembolso en caso de error en la transacción.
                Los cargos asociados con la donación, si los
                hay, se especifican claramente durante el
                proceso de donación.
              </p>
              <p>
                Seguridad de las transacciones: Todas las
                transacciones se procesan de forma segura a
                través de nuestro proveedor de servicios de
                pago, utilizando tecnología de encriptación para
                proteger la información financiera del donante.
              </p>
              <p>
                Política de comunicación: Los donantes pueden
                optar por recibir actualizaciones periódicas
                sobre el trabajo de la organización, pero pueden
                optar por no participar en cualquier momento.
              </p>
            </div>
          </ion-accordion>
          <ion-accordion value="third">
            <ion-item slot="header">
              <ion-label>Tipos de donaciones</ion-label>
            </ion-item>
            <div slot="content" class="ion-padding">
              <p>Formas de donar:</p>
              <ul>
                <li>
                  Donaciones únicas: Se pueden hacer
                  donaciones únicas a través de nuestra página
                  web utilizando tarjetas de crédito, PayPal o
                  transferencias bancarias.
                </li>
                <li>
                  Donaciones recurrentes: Los donantes pueden
                  optar por hacer donaciones mensuales
                  recurrentes para proporcionar un apoyo
                  continuo a nuestra misión.
                </li>
                <li>
                  Donaciones en especie: Aceptamos donaciones
                  de alimentos para animales, suministros
                  médicos, etc., que pueden entregarse en
                  nuestro refugio durante horas de
                  funcionamiento.
                </li>
              </ul>
              <p>
                Beneficios de cada tipo de donación: Las
                donaciones únicas ayudan a cubrir gastos
                operativos inmediatos, mientras que las
                donaciones recurrentes garantizan un flujo de
                ingresos constante para el cuidado a largo plazo
                de los animales.
              </p>
              <p>
                Instrucciones para realizar cada tipo de
                donación: Las donaciones en línea se pueden
                hacer fácilmente a través de nuestra página de
                donaciones. Las transferencias bancarias pueden
                realizarse utilizando la información de nuestra
                cuenta bancaria, proporcionada en la página de
                donaciones.
              </p>
              <p>
                Incentivos fiscales: Todas las donaciones son
                elegibles para deducciones fiscales según las
                leyes locales. Se proporcionará un recibo
                oficial para cada donación que pueda utilizarse
                para fines fiscales.
              </p>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <div class="divider">
          <h3>Maneras de ayudarnos mutuamente</h3>
        </div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-img src="/img/perro.jpg"></ion-img>
              <h2>Donaciones puntuales</h2>
              <p>
                Con tu aportación puedes contribuir al
                mantenimiento del refugio y que podamos seguir
                acogiendo y cuidando a animales en situación de
                abandono.
              </p>
              <ion-accordion-group>
                <ion-accordion value="aaaa">
                  <ion-item slot="header" color="primary">
                    <ion-label>Más información</ion-label>
                  </ion-item>
                  <div slot="content">
                    <section
                        class="ion-padding light-orange">
                      <ion-icon
                          :icon="logoPaypal"
                          :name="logoPaypal"></ion-icon>
                      <h4>Donación mediante paypal</h4>
                      <p>
                        Para dar cualquier cantidad de
                        una forma sencilla y segura a
                        través de Paypal
                      </p>
                      <ion-button
                          href="https://www.paypal.com/donate?token=XfTGMwwpPIAx2e0oMMm1M5FwOvFBbOVkkJbxbJQR7Sx4iBgzCyklPnguyhljDQQcFBUs6CwLQSgduDmbS"
                          target="_blank">
                        Ayúdanos
                      </ion-button>
                    </section>
                    <section class="ion-padding orange">
                      <ion-icon
                          :icon="card"
                          :name="card"></ion-icon>
                      <h4>
                        Donación mediante transferéncia
                        bancaria
                      </h4>
                      <p>ESXX XXXX XXXX XXXX XXXX XXXX</p>
                    </section>
                    <section
                        class="ion-padding light-orange">
                      <ion-icon
                          :icon="logoEuro"
                          :name="logoEuro"></ion-icon>
                      <h4>Donación mediante bizum</h4>
                      <p>Identificador: XXXXX</p>
                    </section>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
            <ion-col>
              <ion-img src="/img/gato.jpg"></ion-img>
              <h2>Solicita ayuda y salva vidas</h2>
              <p>
                Si necesitas recursos económicos para la
                intervención quirúrjica de tu animal de
                compañia, no dudes en pedir ayuda a nuestra
                protectora. También puedes hacer un donativo
                solidario a los animales que lo necesiten.
              </p>
              <ion-accordion-group>
                <ion-accordion value="bbbb">
                  <ion-item slot="header" color="primary">
                    <ion-label>Más información</ion-label>
                  </ion-item>
                  <div slot="content">
                    <section
                        class="ion-padding light-orange">
                      <ion-icon
                          :icon="people"
                          :name="people"></ion-icon>
                      <h4>Haz una donación solidaria</h4>
                      <p>
                        Ayuda economicamente para
                        alcanzar el importe de la
                        operación de uno de nuestros
                        animales
                      </p>
                    </section>
                    <section class="ion-padding orange">
                      <ion-icon
                          :icon="helpBuoy"
                          :name="helpBuoy"></ion-icon>
                      <h4>Solicita ayuda</h4>
                      <p>
                        Ayuda economicamente para
                        alcanzar el importe de la
                        operación de uno de nuestros
                        animales
                      </p>
                    </section>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
        </ion-grid>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/vue";
import {card, helpBuoy, logoEuro, logoPaypal, people} from "ionicons/icons";
import SubHeader from "@/components/SubHeader.vue";
</script>

<style lang="scss">

.container {
  margin: 5vh 10vw;
}

.divider {
  display: flex;
  align-items: center;
}

.divider::before,
.divider::after {
  flex: 1;
  content: "";
  padding: 3px;
  background-color: var(--ion-color-primary);
  margin: 5px;
}

ion-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.orange {
  background-color: #ff914d30;
}

.light-orange {
  background-color: #ff914d10;
}
</style>
