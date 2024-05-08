import { MAIL_DOMAIN } from "../middleware/secrets";
import { mailgunClient } from "../middleware/mailgunMiddleware";
import { transporter } from "../middleware/nodemailerMiddleware";

export const enviarMail = async (
	mensaje: string,
	asunto: string,
	destinatario: string
) => {
	var message = {
		from: "notificacionessantuarioanimal@gmail.com",
		to: destinatario,
		subject: asunto,
		text: mensaje,
	};
	transporter.sendMail(message, (error, info) => {
		if (error) {
			console.log("Error enviando email");
			console.log(error.message);
		} else {
			console.log("Email enviado");
		}
	});
};
