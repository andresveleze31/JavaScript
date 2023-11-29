//Iterar Arreglo con FOREACH

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
];

carrito.forEach(function (producto) {
  console.log("Producto: " + producto.nombre + 
  " Precio: " + producto.precio);
});
