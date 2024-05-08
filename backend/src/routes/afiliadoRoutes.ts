import express, { response } from "express";
import * as afiliadoService from "../services/afiliadoService";

const router = express.Router();

router.get("/",async(req, res)=>{
    try{
        const voluntarios = await afiliadoService.getAllAfiliados()
        res.json(voluntarios)
    }catch(error){
        console.error("Error recibiendo los afiliados",error)
        res.status(400).json({error:"Parámetros invalidos"})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const afiliadoId = parseInt(req.params.id)
        const afiliado = await afiliadoService.getAfiliado(afiliadoId) 
        res.json(afiliado)
    }catch(error){
        console.error("Error recibiendo el afiliado",error)
        res.status(400).json({error:"Parámetros invalidos"})
    }
})

router.post("/", async(req, res)=>{
    try{
        const {
            nombre,
            email,
            telefono,
            Donaciones_realizadas, 
        } = req.body;
        const newAfiliado = await afiliadoService.createAfiliado({
            nombre,
            email,
            telefono,
            Donaciones_realizadas
        });

        res.status(201).json(newAfiliado);
    }catch(error){
        console.error("Error creating afiliado:", error);
		res.status(500).json({ error: "Internal server error" });
    }
})

router.delete("/:afiliadoId", async (req, res) => {
	try {
		const afiliadoId = parseInt(req.params.afiliadoId);
		await afiliadoService.deleteAfiliado(afiliadoId);
		res.status(200).json({
			message: `AFILIADO with ID ${afiliadoId} was deleted successfully`,
		});
	} catch (error) {
		console.error("Error deleting afiliado:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router