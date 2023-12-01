//MODIFICADORES DE ACCESO DE UNA CLASE.
//Class Declaration --> Mas usada
class Cliente {

   #nombre; //Declaracion com campo privado

  constructor(nombre, saldo) {
    this.#nombre = nombre; //Uso
    this.saldo = saldo;
  }

  getNombre(){
    return this.#nombre; //Acceder al nombre
  }

  mostrarInformacion() {
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
}

const cliente = new Cliente("andres", 5000000000);
console.log(cliente.getNombre());//Funciona
// console.log(cliente.#nombre); //No Funciona
