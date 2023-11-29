//Eventos con MOUSE
const nav = document.querySelector('nav');

//CLICK
nav.addEventListener('click', () => {
    console.log("Click en la barra de navegacion");
})

//MOUSE ENTER --> HOVER
nav.addEventListener("mouseenter", () => {
  console.log("Hover a la navegacion");
});

//MOUSEOUT
nav.addEventListener("mouseout", () =>{
    console.log("Saliendo de la navegacion");
})

//MOUSEDOWN --> Similar a un CLICK
nav.addEventListener("mousedown", () => {
  console.log("Mouse down en la barra");
});

//MOUSEUP --> Cuando sueltas el click
nav.addEventListener("mouseup", () => {
  console.log("Soltando el click en la barra");
});

//DOUBLECLICK
nav.addEventListener("dblclick", () => {
  console.log("Doble click a la navegacion");
});