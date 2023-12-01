//METODO EN CLASES.

//Class Declaration --> Mas usada
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
}

const andres = new Cliente("andres", 1000000000);
console.log(andres.mostrarInformacion());