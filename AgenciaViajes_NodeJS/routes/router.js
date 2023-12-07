import express from "express";

//Importar Controlador
import {
  agregarTestimonial,
  paginaDetalleViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
} from "../controllers/paginaController.js";

const router = express.Router();

//Lo dirigimos al controlador.
router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:id", paginaDetalleViaje);
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", agregarTestimonial);

export default router;
