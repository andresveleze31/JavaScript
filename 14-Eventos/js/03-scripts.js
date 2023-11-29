//EVENTOS DE TECLADO.

const busqueda = document.querySelector('.busqueda');


// //KEYDOWN --> Cuando se hunda una tecla haga
// busqueda.addEventListener('keydown', () =>{
//     console.log("Digitando...");    
// });

// //KEYUP --> Cuando presionas la tecla pero la sueltas.
// busqueda.addEventListener('keyup', () =>{
//     console.log("Soltando tecla...");
// })

// //BLUR --> Para validaciones, cuando tocas el input y te sales
// busqueda.addEventListener("blur", () => {
//   console.log("Saliendo del input...");
// });

// //COPY --> Cuando haces copy de un input
// busqueda.addEventListener("copy", () => {
//   console.log("Haciendo copy...");
// });

// //CUT --> Cuando haces cut de un input
// busqueda.addEventListener("cut", () => {
//   console.log("Haciendo cut...");
// });

// //PASTE --> Cuando haces paste al input
// busqueda.addEventListener("paste", () => {
//   console.log("Haciendo paste...");
// });

//INPUT --> Cuando haces cualquier cosa al input
//a excepcion del blur
busqueda.addEventListener("input", (e) => {
  console.log(e.target.value);
});