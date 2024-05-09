import express from "express";
import upload from "../middleware/multerMiddleware.js";
import * as animalService from "../services/animalService.js";
import { API_FILE_URL } from "../middleware/secrets.js";

const router = express.Router();

//Multiples animales
// ex: http://localhost:3000/animales?page=1
router.get("/:page", async (req, res) => {
	try {
		const pageNum = parseInt(req.params.page as string);
		const offset = 5; //Numero de items por pagina

		if (isNaN(pageNum) || isNaN(offset)) {
			throw new Error("Invalid parameters");
		}
		console.log(pageNum, offset);
		const animales = await animalService.getAllAnimals(pageNum, offset);
		res.json(animales);
	} catch (error) {
		console.error("Error retrieving animales:", error);
		res.status(400).json({ error: "Invalid parameters" });
	}
});

//Devuelve todos los animales sin paginación
router.get("/",async(req, res)=>{
    try{
        const animales = await animalService.getAllAnimalsWithoutPagination()
        res.json(animales)
    }catch(error){
        console.error("Error recibiendo los animales",error)
        res.status(400).json({error:"Parámetros invalidos"})
    }
})

//Animal individual
router.get("/animal/:animalId", async (req, res) => {
	try {
		const animalId = parseInt(req.params.animalId as string);

		if (isNaN(animalId)) {
			throw new Error("Invalid parameters");
		}

		const animal = await animalService.getAnimal(animalId);
		res.json(animal);
	} catch (error) {
		console.error("Error retrieving animales:", error);
		res.status(400).json({ error: "Invalid parameters" });
	}
});

router.post("/", upload.single("image"), async (req, res) => {
	try {
		const {
			nombre,
			tipo,
			estado_adopcion,
			peso,
			raza,
			fecha_nacimiento,
			fecha_ingreso,
			sexo,
			descripcion,
			habitacionId,
		} = req.body;
		const imageName = req.file ? "/uploads/" + req.file.filename : "";

		const newAnimal = await animalService.createAnimal({
			nombre,
			tipo,
			estado_adopcion,
			peso,
			raza,
			fecha_nacimiento,
			fecha_ingreso,
			sexo,
			img: imageName,
			descripcion,
			Habitacion: { connect: { id: Number(habitacionId) } },
		});

		res.status(201).json(newAnimal);
	} catch (error) {
		console.error("Error creating animal:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.put("/:animalId", upload.single("image"), async (req, res) => {
	try {
		const animalId = parseInt(req.params.animalId);

		let imagePath = req.body.img; // Preserve the existing image path if not updating the image

		// If a new image is uploaded, update the image path
		if (req.file) {
			imagePath = req.file.path;
		}

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

router.delete("/:animalId", async (req, res) => {
	try {
		const animalId = parseInt(req.params.animalId);
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
