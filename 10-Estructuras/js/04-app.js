const dinero = 300;
const totalPagar = 500;
const tarjeta = true;

if (dinero >= totalPagar) {
  console.log("Si se puede pagar");
} else if(tarjeta){
    console.log("Se puede pagar pero con tarjeta.");
} else {
  console.log("Fondos Insuficientes.");
}
