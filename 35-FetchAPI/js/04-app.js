//CONSUMIR UNA API.

const cargarAPIbtn = document.querySelector('#cargarAPI');

cargarAPIbtn.addEventListener('click', obtenerDatosAPI);

function obtenerDatosAPI(){

    const url = "https://picsum.photos/list";
    
    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(data => {
            mostrarContenido(data);
        })
}

function mostrarContenido(datos){

    const contenido = document.querySelector('.contenido');

    let html = "";

    datos.forEach(dato =>{

        const {author, post_url} =dato;

        html += `<p> Autor: ${author} </p>
        <a href="${post_url}" target="_blank">Ver Imagen</a>`;

    })

    contenido.innerHTML = html;


}