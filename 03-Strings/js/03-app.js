//Concatenar
const producto = "Monitor de 20 pulgadas ";
const precio = "30 USD";

console.log(producto.concat(precio));
console.log(producto.concat("en descuento"));

console.log(producto + "Con un precio de: " + precio);
console.log("El producto de " + producto + "Con un precio de: " + precio);

//Mejor Forma de Concatenar TEMPLATE STRING
console.log(`El producto ${producto} tiene un precio de ${precio}`);