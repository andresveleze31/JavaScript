//Sets en JS

const carrito = new Set();
console.log(carrito);

//Agregar elementos
carrito.add("Camisa");
carrito.add("Disco");
carrito.add("Carro");
carrito.add("Carro");
console.log(carrito);

//Comprobar si un valor existe
console.log(carrito.has("Camisa"));

//Cantidad Elementos
console.log(carrito.size);

//Eliminar Elementos
carrito.delete("Disco");
console.log(carrito);

//Iterar el carrito
carrito.forEach((producto) => {
  console.log(producto);
});

//Eliminar todos los elemento
carrito.clear();
console.log(carrito);

//Pasar arreglos a, Set
const numeros = [10,20,30,10,20,50,60];
const numerroSet = new Set(numeros);

console.log(numerroSet);
