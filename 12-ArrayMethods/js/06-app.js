//METODO EVERY
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let resultado = carrito.every(item =>{
    return item.precio > 50;
})

console.log(resultado);

resultado = carrito.every((item) => {
  return item.precio > 100;
});

console.log(resultado);