const contenedor = document.querySelector('.container');
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener('load', () =>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    //Validar Formularios
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector("#pais").value;

    if(ciudad === "" || pais === "" ){
        mostrarError("Los campos son Obligatorios");
    }

    //Consultar API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje){

    const error = document.createElement('div');
    error.classList.add('text-center', 'bg-red-600', 'text-white', 'font-bold', 'uppercase' , 'py-2', 'mt-5');
    error.textContent = mensaje;

    resultado.appendChild(error);

    setTimeout(() =>{
        error.remove();
    },3000)

}

function consultarAPI(ciudad, pais){

    const appId = '8b2146fcb9f0d1e5f0a45a37d2395b5c';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${ciudad}&appid=${appId}`;

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            limpiarHTML();
            console.log(data);
            if(data.cod === "404"){
                mostrarError("Ciudad no encontrada");
                return;
            }

            mostrarClima(data);
        })
        .catch(error => {
            mostrarError(error);
        })
        
}

function mostrarClima(data){

    const { temp, temp_max, temp_min } = data.main;

    const centigrados = Math.round(temp - 273.15);

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451`;
    actual.classList.add(
      "font-bold",
      "text-6xl",
      "text-white",
      "text-center"
    );
    
    const resultadodiv = document.createElement('div');
    resultado.appendChild(actual);
    resultado.appendChild(resultadodiv)

}

function limpiarHTML(){
    resultado.innerHTML = "";
}