import express from "express";
import habitacionRoutes from "./routes/habitacionRoutes";
import animalRoutes from "./routes/animalRoutes";
import authRoutes from "./routes/authRoutes";
import afiliadoRoutes from "./routes/afiliadoRoutes"
import donacionesRoutes from "./routes/donacionesRoutes"
import mailRoutes from "./routes/mailRoutes";

var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

//All routes

app.use("/api/habitaciones", habitacionRoutes);
app.use("/api/animales", animalRoutes);
app.use("/api/user", authRoutes);
app.use("/api/afiliado",afiliadoRoutes);
app.use("/api/donaciones",donacionesRoutes);
app.use("/api/mail", mailRoutes);


//External commands
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
