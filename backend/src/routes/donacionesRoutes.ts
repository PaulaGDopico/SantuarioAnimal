import express from "express";
import * as donacionesService from "../services/donacionesService";
import upload from "../middleware/multerMiddleware";

const router = express.Router();

router.get("/",async(req, res)=>{
    try{
        const donaciones = await donacionesService.getAllDonaciones()
        res.json(donaciones)
    }catch(error){
        console.error("Error recibiendo la donación",error)
        res.status(400).json({error:"Parámetros invalidos"})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const donacionId = parseInt(req.params.id)
        const donacion = await donacionesService.getDonacion(donacionId)

        res.json(donacion);
    }catch(error){
        console.error("Error recibiendo la donacion",error)
        res.status(400).json({error:"Parámetros invalidos"})
    }
})

router.post("/",upload.single("image"),async(req, res)=>{
    try{
        const {
            titulo,
            contexto,         
            dinero_necesario,
            dinero_alcanzado,
            fecha_inicio,
            animalId,
            afiliadoId,
        } = req.body;
        const imageName = req.file ? req.file.path : "";
        const newDonacion = await donacionesService.createDonacion({
            titulo,
            contexto,         
            img:imageName,
            dinero_necesario,
            dinero_alcanzado,
            fecha_inicio,
            animal: { connect: { id: Number(animalId) } },
            afiliado: { connect: { id: Number(afiliadoId) } },
        });

        res.status(201).json(newDonacion);
    }catch(error){
        console.error("Error creating donacion:", error);
		res.status(500).json({ error: "Internal server error" });
    }
})

router.put("/:donacionId", upload.single("image"), async (req, res) => {
	try {
		const donacionId = parseInt(req.params.donacionId);

		let imagePath = req.body.img; // Preserve the existing image path if not updating the image

		// If a new image is uploaded, update the image path
		if (req.file) {
			imagePath = req.file.path;
		}

		const updateDonacion = await donacionesService.updateDonacion(
			donacionId,
			req.body
		);

		res.json(updateDonacion);
	} catch (error) {
		console.error("Error updating donacion:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.delete("/:donacionId", async (req, res) => {
	try {
		const donacionId = parseInt(req.params.donacionId);
		await donacionesService.deleteDonacion(donacionId);
		res.status(200).json({
			message: `Donation with ID ${donacionId} was deleted successfully`,
		});
	} catch (error) {
		console.error("Error deleting donation:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router