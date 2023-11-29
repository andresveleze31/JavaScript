//Metodos de eliminacion
let meses = ["Enero", "Febrero", "Marzo"];


//Eliminar Ultimo elementos
meses.pop();
console.log(meses);

//Eliminar Primer Elemento
meses.shift();
console.log(meses);

meses = ["Enero", "Febrero", "Marzo"];

//Eliminar Desde, y cuanto elementos
meses.splice(1, 2);
console.log(meses);

