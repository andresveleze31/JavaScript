//SELECTORES Y VARIABLES

const formulario = document.querySelector("#formulario");
const selectCripto = document.querySelector("#criptomonedas");
const selectMoneda = document.querySelector("#moneda");
const resultado = document.querySelector("#resultado");

document.addEventListener('DOMContentLoaded', () =>{
    cargarCriptomonedas();
    formulario.addEventListener("submit", validarFormulario)
});

function cargarCriptomonedas(){

    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            mostrarCriptomonedas(data.Data);
        })

}

function mostrarCriptomonedas(criptoMonedas){

    criptoMonedas.forEach((cripto) => {

        const option = document.createElement('option');
        option.value = cripto.CoinInfo.Name;
        option.textContent = cripto.CoinInfo.FullName;

        selectCripto.appendChild(option);
    })
}

function validarFormulario(e){

    e.preventDefault();

    const moneda = selectMoneda.value;
    const cripto = selectCripto.value;

    if(moneda === "" || cripto === ""){
        mostrarAlerta("Todos los campos son obligatorios");
    }

    consultarAPI(moneda, cripto);

}

function mostrarAlerta(mensaje){

    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.style.backgroundColor = "red";
    alerta.style.color = "white";
    alerta.style.fontWeight = "bold";
    alerta.style.textTransform = "uppercase";
    alerta.style.textAlign = "center";
    alerta.style.padding = "20px";
    
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove()
    }, 3000)

}

function consultarAPI(moneda, cripto){

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

    fetch(url)
        .then(resultado => {
            return resultado.json();
        })
        .then(data => {
            
            mostrarCotizacion(data.DISPLAY[cripto][moneda]);
        })
}

function mostrarCotizacion(cotizacion){

    resultado.innerHTML = "";

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El Precio mas alto del dia es: <span>${HIGHDAY}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
}
