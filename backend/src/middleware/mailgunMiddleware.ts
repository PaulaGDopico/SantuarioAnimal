import Mailgun from "mailgun.js";
import formData from "form-data";
import { MAIL_API_KEY } from "./secrets.js";


const mailgun = new Mailgun(formData);

export const mailgunClient = mailgun.client({
	username: "api",
	key: MAIL_API_KEY || "key-yourkeyhere",
});

