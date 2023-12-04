//Fetch con ARREGLO

const cargarJSONArraybtn = document.querySelector("#cargarJSONArray");

cargarJSONArraybtn.addEventListener('click', obtenerDatos);

let arreglo;

function obtenerDatos(){

    const url = 'data/empleados.json'

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data =>{
            console.log(data);
            arreglo = data;
            console.log(arreglo);
        })

}

