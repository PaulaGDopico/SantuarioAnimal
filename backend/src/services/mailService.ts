import { MAIL_DOMAIN } from "../middleware/secrets";
import { mailgunClient } from "../middleware/mailgunMiddleware";
export const enviarMail = async (
	mensaje: string,
	asunto: string,
	destinatario: string
) => {
	mailgunClient.messages
		.create(MAIL_DOMAIN, {
			from: "4bvives@gmail.com",
			to: [`${destinatario}`],
			subject: asunto,
			text: mensaje,
			//html: "<h1>Testing some Mailgun awesomeness!</h1>",
		})
		.then((msg) => console.log(msg)) // logs response data
		.catch((err) => console.log(err)); // logs any error
};
