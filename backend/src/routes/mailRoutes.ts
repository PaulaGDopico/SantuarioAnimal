import express from "express";
const router = express.Router();
import * as mailService from "../services/mailService.js";

router.post("/", async (req, res) => {
    try {
        const { mensaje, asunto, destinatario } = req.body;
        console.log(destinatario);
        const mail = await mailService.enviarMail(mensaje, asunto, destinatario);
        res.status(200).json(mail);
    } catch (error) {
        console.error("Error enviando mail:", error);
        res.status(400).json({ error: "Error enviando el email" });
    }
});

export default router;
