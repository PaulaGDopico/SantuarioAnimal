import express from "express";
import { Application } from "express";
import habitacionRoutes from "./routes/habitacionRoutes";
import animalRoutes from "./routes/animalRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//All routes
app.use("/habitaciones", habitacionRoutes);
app.use("/animales", animalRoutes);

//External commands
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
