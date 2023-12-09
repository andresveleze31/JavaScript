import express from "express";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();
app.use(express.json());

conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);

app.listen(4000, () => {
    console.log("Servidor Funcionando en puerto 4000");
});