//QUERY SELECTOR.

//CLASES
const card = document.querySelector(".card");
console.log(card);

//Se pueden tener selectores especificos
const info = document.querySelector(".premium .info");
console.log(info);

//Seleccionar el segundo card del hospedaje.
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(segundoCard);

//ID
const formulario = document.querySelector("#formulario");
console.log(formulario);

//POR HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);