import express from "express";
const router = express.Router();

import * as animalService from "../services/animalService";

router.get("/:pageNum", async (req, res) => {
	try {
		const pageNum = parseInt(req.params.pageNum as string);
		const offset = 5; //Numero de items por pagina

		if (isNaN(pageNum) || isNaN(offset)) {
			throw new Error("Invalid parameters");
		}

		const animales = await animalService.getAllAnimals(pageNum, offset);
		res.json(animales);
	} catch (error) {
		console.error("Error retrieving animales:", error);
		res.status(400).json({ error: "Invalid parameters" });
	}
});

router.post("/", async (req, res) => {
	try {
		const newAnimal = await animalService.createAnimal(req.body);
		res.status(201).json(newAnimal);
	} catch (error) {
		console.error("Error creating animal:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

/*Update, se puede enviar solo el campo que quieras modificar en el body del json
Ejemplo:
{
  "nombre": "Updated Name"
}
*/
router.put("/:animalId", async (req, res) => {
	try {
		const animalId = parseInt(req.params.animalId);
		const updatedAnimal = await animalService.updateAnimal(
			animalId,
			req.body
		);
		res.json(updatedAnimal);
	} catch (error) {
		console.error("Error updating animal:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const animalId = parseInt(req.params.id);
		await animalService.deleteAnimal(animalId);
		res.status(200).json({
			message: `Animal with ID ${animalId} was deleted successfully`,
		});
	} catch (error) {
		console.error("Error deleting animal:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
