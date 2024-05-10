import { API_URL } from "@/middleware/secrets";

export const enviarMail = async (
	mensaje: string,
	asunto: string,
	destinatario: string
) => {
	try {
		const mail = {
			mensaje: mensaje,
			asunto: asunto,
			destinatario: destinatario,
		};
		const response = await fetch(API_URL + "/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(mail),
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};
