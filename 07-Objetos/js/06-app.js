//Objeto dentro de objetos -- destructuring
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
};

//Destructuring
const {nombre, informacion:{peso}} = producto;
console.log(peso);