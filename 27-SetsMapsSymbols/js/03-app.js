//MAPS. --> Listas ordenadas en llave valor.
const cliente = new Map();

//Añadir Elemento
cliente.set("nombre", "karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);
cliente.set(true, true);
console.log(cliente);

//Ver extension
console.log(cliente.size);

//Ver si existe
console.log(cliente.has('nombre'));

//Obtener el valor por medio de la llave
console.log(cliente.get('nombre'));

//Eliminar Elemento
cliente.delete('saldo');
console.log(cliente);

//Iteracion for each
cliente.forEach((data,index) =>{
    console.log(index, data);
})