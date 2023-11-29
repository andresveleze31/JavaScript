//Generar el HTML.

//Tipo de elemento a crear
const enlace = document.createElement('a');

//Añadiendo Caracteristicas o Atributos
enlace.textContent = "Nuevo Enlace";
enlace.href = "www.google.com";
enlace.classList.add('clase__nueva');

//Seleccionar el elemento a donde añadirlo
const navegacion = document.querySelector('nav');
navegacion.appendChild(enlace); //Añadirlo al final
navegacion.insertBefore(enlace, navegacion.children[1]);
//Añadirlo antes del hijo en la pos 1

console.log(enlace);


//Añadir un card.


//Creacion de Parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$1000 por persona";
parrafo3.classList.add("precio");

//Creacion de Informacion
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

//Creacion de Imagen
const imagen = document.createElement('img');
imagen.src = "img/hacer1.jpg";

//Creacion Carta.
const carta = document.createElement('div');
carta.classList.add('card');
carta.appendChild(imagen);
carta.appendChild(info);

//Insercion en el HTML
const contenedorCards = document.querySelector('.contenedor-cards');
contenedorCards.insertBefore(carta, contenedorCards.children[0]);