import express from "express";
import habitacionRoutes from "./routes/habitacionRoutes";
import animalRoutes from "./routes/animalRoutes";
import authRoutes from "./routes/authRoutes";
import afiliadoRoutes from "./routes/afiliadoRoutes";
import donacionesRoutes from "./routes/donacionesRoutes";
import mailRoutes from "./routes/mailRoutes";

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: [
        "https://santuario-animal-frontend.vercel.app",
        "http://localhost:8100",
    ],
};

app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));

//All routes


app.use("/habitaciones", habitacionRoutes);
app.use("/animales", animalRoutes);
app.use("/user", authRoutes);
app.use("/afiliado", afiliadoRoutes);
app.use("/donaciones", donacionesRoutes);
app.use("/mail", mailRoutes);


//External commands
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
