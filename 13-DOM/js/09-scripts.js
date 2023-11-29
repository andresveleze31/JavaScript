//ELIMINAR ELEMENTOS DEL DOM

//Eliminar Directamente
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

primerEnlace.remove();

//Eliminar desde el padre.
const navegacion = document.querySelector('nav');
console.log(navegacion);

navegacion.removeChild(navegacion.children[2]);
console.log(navegacion);
