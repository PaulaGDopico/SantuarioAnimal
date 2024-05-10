import { MAIL_DOMAIN } from "../middleware/secrets";
import { mailgunClient } from "../middleware/mailgunMiddleware";
import { transporter } from "../middleware/nodemailerMiddleware";

export const enviarMail = async (
	mensaje: string,
	asunto: string,
	destinatario: string
) => {
	await new Promise((resolve, reject) => {
		// verify connection configuration
		transporter.verify(function (error, success) {
			 if (error) {
				  console.log(error);
				  reject(error);
			 } else {
				  console.log("Server is ready to take our messages");
				  resolve(success);
			 }
		});
  });

	var message = {
		from: "notificacionessantuarioanimal@gmail.com",
		to: destinatario,
		subject: asunto,
		text: mensaje,
	};

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(message, (err, info) => {
			 if (err) {
				  console.error(err);
				  reject(err);
			 } else {
				  console.log(info);
				  resolve(info);
			 }
		});
  });
	
  
};
