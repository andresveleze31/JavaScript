//MODIFICAR TEXTO E IMAGENES.

const encabezado = document.querySelector('h1');
console.log(encabezado);

//Mostrar el texto.
console.log(encabezado.innerHTML); //Trae la estructura HTML
console.log(encabezado.textContent);

//Modificar el Texto
encabezado.textContent = "Nuevo Heading";


//MODIFICAR IMAGEN
const imagen = document.querySelector('.card img');
console.log(imagen);

imagen.src = "img/hacer2.jpg";