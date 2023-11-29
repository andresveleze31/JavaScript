//EVENTOS DE FORMULARIO.
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', validarFormulario )

function validarFormulario(e){
    e.preventDefault(); //Evita el Default.

    console.log("Validando Formulario...");
    console.log(e.target.method);
}
