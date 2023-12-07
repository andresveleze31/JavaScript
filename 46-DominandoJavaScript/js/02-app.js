//HOISTING.

//Function Declaration. ---> Sirve primero se registra
obtenerCliente("Andres");
function obtenerCliente(nombre){
    console.log(nombre);
}

//Function expression. --> No sirve 
obtenerCliente2("Pedro")
const obtenerCliente2 = function(nombre){
    console.log(nombre);
}