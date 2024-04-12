import express from "express";
const router = express.Router();

//Routes functions
import * as animalService from "../services/animalService";

router.get("/:pageNum", async (req, res) => {
	try {
		const pageNum = parseInt(req.params.pageNum as string);
		const offset = 5;

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

export default router;
