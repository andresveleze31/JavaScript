//CONTROLADOR

//Importamos el Modelo, el cual tiene los metodos para consulta
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

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

const paginaTestimoniales = async(req, res) => {

  try {

    const testimonios = await Testimonial.findAll();
    console.log(testimonios);

    res.render("testimoniales", {
      nombrePagina: "Testimoniales",
      testimonios: testimonios
    });   
  } catch (error) {
    console.log(error);
  }

  
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

  //Validar
  const {nombre, correo, mensaje} = req.body;

  const errores = [];


  if(nombre.trim() === ""){
    errores.push({mensaje:"El nombre esta vacio"});   
  }
  if(correo.trim() === ""){
    errores.push({mensaje:"El correo esta vacio"});   
  }
  if(mensaje.trim() === ""){
    errores.push({mensaje:"El mensaje esta vacio"});   
  }


  if(errores.length > 0){

    const testimonios = await Testimonial.findAll();


    //Mostrar la vista con los errores.
    res.render('testimoniales', {
      nombre: "Testimoniales",
      errores: errores,
      testimonios
    })
  }else{
    //Almacenar en BD
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje
      })

      res.redirect('/testimoniales');
    } catch (error) {
      console.log(error);
    }
  }


};

export {
  agregarTestimonial,
  paginaDetalleViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
};
