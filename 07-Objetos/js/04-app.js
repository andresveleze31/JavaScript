//DESTRUCTURING
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};


const nombre1 = producto.nombre;
console.log(nombre1);

//DESTRUCTURING
const {nombre , precio, disponible} = producto;
console.log(nombre, precio, disponible);

