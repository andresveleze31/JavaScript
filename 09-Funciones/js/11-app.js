//Iterar Arreglo con FOREACH

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
];

carrito.forEach( (producto) => {
  console.log("Producto: " + producto.nombre + " Precio: " + producto.precio);
});

//MAP --> Retorna un arreglo nuevo
const arreglo = carrito.map( (producto) => {
  return "Producto: " + producto.nombre + " Precio: " + producto.precio;
});


