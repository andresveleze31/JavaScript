//CREAR UNA CLASE

//Class Declaration --> Mas usada
class Cliente{

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const andres = new Cliente("andres", 1000000000);
console.log(andres);

//Class Expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const juan = new Cliente2("juan", 1000000000);
console.log(juan);