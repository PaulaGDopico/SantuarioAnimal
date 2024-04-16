import express from "express";
const router = express.Router();

//Routes functions
import * as habitacionService from "../services/habitacionService";

//This works from /habitaciones
router.get("/", async (req, res) => {
	console.log("Received request for /habitaciones");
	try {
		const habitaciones = await habitacionService.getAllHabitaciones();
		console.log(habitaciones);

		res.json(habitaciones);
	} catch (error) {
		console.error("Error retrieving habitaciones:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// Get one habitacion by id
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		 const habitacion = await habitacionService.getHabitacionById(parseInt(id));
		 if (habitacion) {
			  res.json(habitacion);
		 } else {
			  res.status(404).json({ error: "Habitacion not found" });
		 }
	} catch (error) {
		 console.error("Error retrieving habitacion:", error);
		 res.status(500).json({ error: "Internal server error" });
	}
});

// Create a new habitacion
router.post("/", async (req, res) => {
	const { aforo } = req.body;
	try {
		 const newHabitacion = await habitacionService.createHabitacion(aforo);
		 res.json(newHabitacion);
	} catch (error) {
		 console.error("Error creating habitacion:", error);
		 res.status(500).json({ error: "Internal server error" });
	}
});

// Update a habitacion
router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { aforo } = req.body;
	try {
		 const updatedHabitacion = await habitacionService.updateHabitacion(parseInt(id), aforo);
		 if (updatedHabitacion) {
			  res.json(updatedHabitacion);
		 } else {
			  res.status(404).json({ error: "Habitacion not found" });
		 }
	} catch (error) {
		 console.error("Error updating habitacion:", error);
		 res.status(500).json({ error: "Internal server error" });
	}
});

// Delete a habitacion
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		 await habitacionService.deleteHabitacion(parseInt(id));
		 res.status(204).send();
	} catch (error) {
		 console.error("Error deleting habitacion:", error);
		 res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
