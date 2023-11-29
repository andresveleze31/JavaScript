const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Si se puede pagar ");
} else if (!usuario) {
    console.log("Crea una cuenta");
} else if(!puedePagar){
    console.log("Fondos Insuficientes.");
} else {
  console.log("No puedes comprar");
}
