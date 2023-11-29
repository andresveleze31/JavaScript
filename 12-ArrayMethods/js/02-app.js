const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

//En que posicion se encuentra el mes n
//CON FOREACH
meses.forEach((mes, indice) => {
    if(mes=== "Abril"){
        console.log(indice);
    }
})

//METODO FIND INDEX
const indice = meses.findIndex((mes) => {
  return mes === "Abril";
});
console.log(indice);

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Encontrar indice de un arreglo de obejtos.
//METODO FIND INDEX
const indiceCarrito = carrito.findIndex((carrito) =>{
    return carrito.precio === 100;
})
console.log(indiceCarrito);