const diaHoy = new Date(); //Fecha Actual. 
const fechaEspecifica = new Date('10-31-2003');  //Mes dia YY
const fechaEspecifica2 = new Date('October 31 2003');  //Mes dia YY

console.log(diaHoy);
console.log(fechaEspecifica);
console.log(fechaEspecifica2);

//METODOS
console.log(diaHoy.getFullYear());
console.log(diaHoy.getMonth()); //Enero empieza en 0
console.log(diaHoy.getHours());
console.log(diaHoy.getTime());