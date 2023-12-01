//Constructor de objetos.
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

//Instancia
const pedro = new Cliente("Pedro", 6000);
console.log(pedro);

//Creacion de Proto

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platino";
  } else {
    tipo = "Normal";
  }

  return tipo;
};

Cliente.prototype.informacion = function () {
  console.log(
    `El Cliente ${this.saldo} tiene un saldo de ${
      this.saldo
    } y es un cliente tipo: ${this.tipoCliente()}`
  );
};

//Uso de Proto
pedro.informacion();
