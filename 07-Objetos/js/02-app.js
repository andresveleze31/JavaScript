//ACCEDER A ELEMENTOS DEL PRODUCTO

//Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombre']);
console.log(producto['precio']);
console.log(producto['disponible']);