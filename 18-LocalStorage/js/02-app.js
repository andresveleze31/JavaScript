//LOCAL STORAGE -- Obtener data.

//OBTENER SIMPLE
const nombre = localStorage.getItem('nombre');
console.log(nombre);

//OBTENER ARREGLOS
const mesesString = localStorage.getItem('meses');
console.log(mesesString);

const meses = JSON.parse(mesesString);
console.log(meses);

//OBTENER OBJETOS
const objetoString = localStorage.getItem('producto');
console.log(objetoString);

const objeto = (JSON.parse(objetoString));
console.log(objeto);