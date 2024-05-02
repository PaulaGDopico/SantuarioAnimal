import express from "express";
import habitacionRoutes from "./routes/habitacionRoutes";
import animalRoutes from "./routes/animalRoutes";
import authRoutes from "./routes/authRoutes";
import mailRoutes from "./routes/mailRoutes";
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

//All routes
app.use("/habitaciones", habitacionRoutes);
app.use("/animales", animalRoutes);
app.use("/user", authRoutes);
app.use("/mail", mailRoutes);

//External commands
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
