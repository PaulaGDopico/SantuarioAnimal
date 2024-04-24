import express from "express";
import * as authService from "../services/authService";

const router = express.Router();

router.post("/signup", async (req, res) => {
	try {
		const { email, password, nombre, telefono } = req.body;
		const newAdministrador = await authService.signup({
			email,
			password,
			nombre,
			telefono,
		});

		res.status(201).json(newAdministrador);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		//retorna {{user},token}
		let administradorExists = await authService.login({
			email,
			password,
		});

		if (administradorExists.errors.length > 0) {
			return res.status(400).json({ errors: administradorExists.errors });
		}
		res.status(201).json(administradorExists);
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
