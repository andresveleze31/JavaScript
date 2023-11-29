const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


//Operador Igualdad == No estricto, no importa tipo dato
console.log(numero1 == numero3);
console.log(numero1 == numero2);

//Operador Igualdad === Estricto, importa tipo de dato
console.log(numero1 === numero3);
console.log(numero1 === numero2);

//Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(password1 !== password2);