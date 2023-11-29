//CREACION OBJETOS CON OBJECT CONSTRUCTOR

//Literal
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Celular", 20);
console.log(producto2);