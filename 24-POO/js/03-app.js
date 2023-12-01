//HEREDAR DE UNA CLASE.
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

//Herencias
class Empresa extends Cliente{

    constructor(nombre, saldo, telefono, categoria){
        //Para heredar algo del constructor.
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //Para reescribir el metodo basta con escribirlo de la
    //MISMA FORMA.
}

const andres = new Cliente("andres", 1000000000);
const empresa = new Empresa("Empresa1", 1000 );
//Automaticamente con extends hereda los metodos.
console.log(empresa.mostrarInformacion()); 
