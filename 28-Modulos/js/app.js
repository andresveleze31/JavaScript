import {Cliente, nombreCliente, variable, mostrarInformacion, tieneSaldo} from './cliente.js';

console.log(nombreCliente);
console.log(variable);

console.log(mostrarInformacion(nombreCliente, variable));
tieneSaldo(variable);

const cliente = new Cliente(nombreCliente, variable);
console.log(cliente);