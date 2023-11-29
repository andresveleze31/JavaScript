//UNIR DOS OBJETOS.

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
    peso: "1kg",
    altura: "1m"
}

console.log(producto);
console.log(medidas);

//Unir los atributos en un solo objeto
const resultado = Object.assign(producto,medidas);
console.log(resultado);

//Spread Operator o Rest Operatos
const resultado2 = {...producto, ...medidas}
console.log(resultado2);