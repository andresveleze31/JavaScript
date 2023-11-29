//AGREGAR PROPIEDADES A UN OBJETO

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

//Agregar Propiedades
producto.imagen = "image.jpg";
console.log(producto);


//Eliminar Propiedad
delete producto.disponible;
console.log(producto);

