import express from "express";
import upload from "../middleware/multerMiddleware";
import * as animalService from "../services/animalService";
import {CustomFile} from "../types/customfile";

const router = express.Router();
//Multiples animales
// ex: http://localhost:3000/animales?page=1
interface Filtros {
    tipoPerro: boolean,
    tipoGato: boolean,
    urgente: boolean,
    especial: boolean,
    apadrinando: boolean,
    sinEstado: boolean,
    hembra: boolean,
    macho: boolean,
    tamanyo: string,
    peso: string,
    // Agrega más filtros según sea necesario
}


//5 primeros animales
router.get("/primeros", async (req, res) => {
    try {
        const primerosAnimales = await animalService.getFiveFirstAnimals();
        res.json(primerosAnimales)
    } catch (error) {
        console.error("Error recibiendo los primeros", error);
        res.status(400).json({error: "No se han podido recibir los primeros animales"})
    }
})
//5 primeros animales URGENTEs para pagina de inicio.
router.get("/primerosUrgentes", async (req, res) => {
    try {
        const primerosAnimales = await animalService.getFiveFirstUrgentAnimals();
        res.json(primerosAnimales)
    } catch (error) {
        console.error("Error recibiendo los primeros", error);
        res.status(400).json({error: "No se han podido recibir los primeros animales"})
    }
})

router.get("/allAnimalsWithFilter", async (req, res) => {
    try {
        const filtros: Filtros = {
            tipoPerro: req.query.tipoPerro === 'true',
            tipoGato: req.query.tipoGato === 'true',
            urgente: req.query.urgente === 'true',
            especial: req.query.especial === 'true',
            apadrinando: req.query.apadrinando === 'true',
            sinEstado: req.query.sinEstado === 'true',
            hembra: req.query.hembra === 'true',
            macho: req.query.macho === 'true',
            tamanyo: req.query.tamanyo as string || "todos",
            peso: req.query.peso as string || '0',
        };

        const animales = await animalService.getAllAnimalsConFiltros(filtros);
        res.json(animales);
    } catch (error) {
        console.error("Error retrieving animales:", error);
        res.status(400).json({error: "Invalid parameters"});
    }
});

router.get("/:page", async (req, res) => {
    try {
        const pageNum = parseInt(req.params.page as string);
        const offset = 20; // Numero de elementos por página


        if (isNaN(pageNum) || isNaN(offset)) {
            throw new Error("Invalid parameters");
        }

        const filtros: Filtros = {
            tipoPerro: req.query.tipoPerro === 'true',
            tipoGato: req.query.tipoGato === 'true',
            urgente: req.query.urgente === 'true',
            especial: req.query.especial === 'true',
            apadrinando: req.query.apadrinando === 'true',
            sinEstado: req.query.sinEstado === 'true',
            hembra: req.query.hembra === 'true',
            macho: req.query.macho === 'true',
            tamanyo: req.query.tamanyo as string || "todos",
            peso: req.query.peso as string || '0',
        };

        const animales = await animalService.getAllAnimals(pageNum, offset, filtros);

        res.json(animales);
    } catch (error) {
        console.error("Error retrieving animales:", error);
        res.status(400).json({error: "Invalid parameters"});
    }
});

//Devuelve todos los animales sin paginación
router.get("/", async (req, res) => {
    try {
        const animales = await animalService.getAllAnimalsWithoutPagination();
        res.json(animales);
    } catch (error) {
        console.error("Error recibiendo los animales", error);
        res.status(400).json({error: "Parámetros invalidos"});
    }
});

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
        res.status(400).json({error: "Invalid parameters"});
    }
});

router.post("/", upload, async (req, res) => {

    try {
        const {
            nombre,
            tipo,
            estado_adopcion,
            peso,
            tamanyo,
            raza,
            fecha_nacimiento,
            fecha_ingreso,
            sexo,
            descripcion,
            habitacionId,
            afiliadoId
        } = req.body;

        let imageName: string;
        const file: CustomFile = req.file as CustomFile
        imageName = file.blob.url;

        const newAnimal = await animalService.createAnimal({
            nombre,
            tipo,
            estado_adopcion,
            peso,
            tamanyo,
            raza,
            fecha_nacimiento,
            fecha_ingreso,
            sexo,
            img: imageName,
            descripcion,

            Habitacion: {connect: {id: Number(habitacionId)}},
            Afiliado: {connect: {id: Number(afiliadoId)}}

        });

        res.status(201).json(newAnimal);
    } catch (error) {
        console.error("Error creating animal:", error);
        res.status(500).json({error: "Internal server error"});
    }
});

router.put("/:animalId", upload, async (req, res) => {
    try {

        console.log("Request Body:", req.body);
        console.log("Request File:", req.file); // Log the uploaded file to check if it's being received

        const animalId = parseInt(req.params.animalId);

        let imageName: string;

        if (req.file){
            const file: CustomFile = req.file as CustomFile
            imageName = file.blob.url;
        }else{
            imageName = req.body.img
        }
        console.log("Animal ID:", animalId);
        console.log("Image Name:", imageName);

        req.body.habitacionId = parseInt(req.body.habitacionId);
        delete req.body.Donaciones_recibidas
        req.body.afiliadoId = parseInt(req.body.afiliadoId)


        const updatedAnimal = await animalService.updateAnimal(
            animalId,
            { ...req.body, img: imageName}
        );

        res.json(updatedAnimal);
    } catch (error) {
        console.error("Error updating animal:", error);
        res.status(500).json({error: "Internal server error"});
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
        res.status(500).json({error: "Internal server error"});
    }
});

export default router;
