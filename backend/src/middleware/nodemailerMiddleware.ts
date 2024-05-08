import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "notificacionessantuarioanimal@gmail.com",
		pass: "fjis kvhj zqxk tptv",
	},
});
