const cargarJSONbtn = document.querySelector('#cargarJSON');

cargarJSONbtn.addEventListener('click', obtenerDataJSON);


function obtenerDataJSON(){

    const url = "data/empleado.json";

    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            return respuesta.json();
        })
        .then(datos => {
            console.log(datos); //Se muestra un objeto.
            mostrarHTML(datos);
        })
}


function mostrarHTML(empleado){

    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = empleado.empresa;

}