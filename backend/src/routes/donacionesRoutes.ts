import express from "express";
import * as donacionesService from "../services/donacionesService";
import {getDonacion} from "../services/donacionesService";
import upload from "../middleware/multerMiddleware";
import {CustomFile} from "../types/customfile";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const donaciones = await donacionesService.getAllDonaciones()
        res.json(donaciones)
    } catch (error) {
        console.error("Error recibiendo la donación", error)
        res.status(400).json({error: "Parámetros invalidos"})
    }
})

// MOSTRAR 5 donaciones NO COMPLETADAS
router.get("/otros/", async (req, res) => {
    try {
        const donaciones = await donacionesService.getFiveDonations()
        res.json(donaciones)
    } catch (error) {
        console.error("Error recibiendo la donación", error)
    }
})
router.put("/donar/:donacionId", async (req, res) => {
    try {
        const donacionId = parseInt(req.params.donacionId);
        const {dineroASumar} = req.body;
        console.log(req.body)
        const updateResult = await donacionesService.updateDineroAlcanzado(
            donacionId,
            parseInt(dineroASumar)
        );


        if (updateResult.success) {
            res.json(updateResult.data);
        } else {
            res.status(400).json({error: updateResult.error});
        }
    } catch (error) {
        console.error("Error updating donacion:", error);
        res.status(500).json({error: "Internal server error"});
    }
})
router.get("/:id", async (req, res) => {
    try {
        const donacionId = parseInt(req.params.id)
        const donacion = await donacionesService.getDonacion(donacionId)

        res.json(donacion);
    } catch (error) {
        console.error("Error recibiendo la donacion", error)
        res.status(400).json({error: "Parámetros invalidos"})
    }
})

router.post("/", upload, async (req, res) => {
    try {
        const {
            titulo,
            contexto,
            dinero_necesario,
            dinero_alcanzado,
            fecha_inicio,
            animalId,
            afiliadoId,
        } = req.body;

        let imageName: string;
        const file: CustomFile = req.file as CustomFile
        imageName = file.blob.url;

        const newDonacion = await donacionesService.createDonacion({
            titulo,
            contexto,
            img: imageName,
            dinero_necesario,
            dinero_alcanzado,
            fecha_inicio,
            animal: {connect: {id: Number(animalId)}},
            afiliado: {connect: {id: Number(afiliadoId)}},
        });

        res.status(201).json(newDonacion);
    } catch (error) {
        console.error("Error creating donacion:", error);
        res.status(500).json({error: "Internal server error"});
    }
})

router.put("/:donacionId", upload, async (req, res) => {
    try {
        const donacionId = parseInt(req.params.donacionId);
        const donacion = await getDonacion(donacionId)
        if (!donacion) {
            res.status(400).json({error: "No existe esa donación"})
            return
        }

        let imageName:string;
        if (req.file){
            const file: CustomFile = req.file as CustomFile
            imageName = file.blob.url;
        }else{
            imageName = req.body.img
        }
        const updateDonacion = await donacionesService.updateDonacion(
            donacionId,
            {...req.body, afiliadoId: Number(req.body.afiliadoId), animalId: Number(req.body.animalId), img: imageName}
        );

        res.json(updateDonacion);
    } catch (error) {
        console.error("Error updating donacion:", error);
        res.status(500).json({error: "Internal server error"});
    }
});

router.put("/donar/:donacionId", async (req, res) => {
    try {
        const donacionId = parseInt(req.params.donacionId);
        const {dineroASumar} = req.body;

        const updateResult = await donacionesService.updateDineroAlcanzado(
            donacionId,
            parseInt(dineroASumar)
        );


        if (updateResult.success) {
            res.json(updateResult.data);
        } else {
            res.status(400).json({error: updateResult.error});
        }
    } catch (error) {
        console.error("Error updating donacion:", error);
        res.status(500).json({error: "Internal server error"});
    }
})

router.delete("/:donacionId", async (req, res) => {
    try {
        const donacionId = parseInt(req.params.donacionId);
        await donacionesService.deleteDonacion(donacionId);
        res.status(200).json({
            message: `Donation with ID ${donacionId} was deleted successfully`,
        });
    } catch (error) {
        console.error("Error deleting donation:", error);
        res.status(500).json({error: "Internal server error"});
    }
});

export default router