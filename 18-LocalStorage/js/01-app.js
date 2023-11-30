//LOCALSTORAGE -- Es permanente.
localStorage.setItem('nombre', 'Juan'); //Clave - Valor.

//SESSION STORAGE -- Almacenamiento de sesion
sessionStorage.setItem('nombre', 'Andres'); //Clave - Valor.

//Convertir Objeto a String
const producto = {
    nombre: "TV",
    precio: 20
}
const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString)

//Convertir Arreglo a String.
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);