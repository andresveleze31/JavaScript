//OPERADOR TERNARIO

const autenticado = true;
const puedePagar = true;

console.log(
  autenticado && puedePagar
    ? console.log("Si esta Auth")
    : console.log("No esta Auth")
);
