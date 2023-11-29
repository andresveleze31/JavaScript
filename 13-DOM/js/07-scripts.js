//Cambiar CSS con JS

// const encabezado = document.querySelector('h1');
// console.log(encabezado.style);

// //EN CSS background-color;
// //En JS backgroundColor;

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';

const card = document.querySelector('.card');
console.log(card.classList);

card.classList.add('nueva__clase');
console.log(card.classList);

card.classList.remove("nueva__clase");
console.log(card.classList);

