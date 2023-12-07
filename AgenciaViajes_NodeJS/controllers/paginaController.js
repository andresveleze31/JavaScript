//CONTROLADOR

//Importamos el Modelo, el cual tiene los metodos para consulta
import { Viaje } from "../models/Viaje.js";

const paginaViajes = async (req, res) => {
  //Consultar BD
  const viajes = await Viaje.findAll();
  console.log(viajes);

  res.render("viajes", {
    nombrePagina: "Viajes",
    viajes: viajes,
  });
};

const paginaInicio = (req, res) => {
  res.render("inicio", {
    nombrePagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    nombrePagina: "Nosotros",
  });
};

const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    nombrePagina: "Testimoniales",
  });
};

const paginaDetalleViaje = async (req, res) => {
  const slug = req.params.id;

  try {
    const resultado = await Viaje.findOne({
      where: { slug: slug },
    });

    res.render("viaje", {
      nombrePagina: "Informacion Viaje",
      viaje: resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

const agregarTestimonial = async (req, res) => {
  const testimonial = req.body;
};

export {
  agregarTestimonial,
  paginaDetalleViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
};
