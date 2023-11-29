//Destructuring de arreglos

const numeros = [10,20,30,40,50];

const [primero, segundo, tercero, cuarto, quinto] = numeros;
const [, , tercero2] = numeros;

console.log(primero, tercero, quinto);
console.log(tercero2);