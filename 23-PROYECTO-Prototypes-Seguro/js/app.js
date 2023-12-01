const resultado = document.querySelector("#resultado");

//Constructuores
function Seguro(marca, year, tipo) {
  (this.marca = marca),
    (this.year = year),
    (this.tipo = tipo);
}

function UI() {}

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector("#year");
  for (i = max; i > min - 1; i--) {
    const optionHTML = document.createElement("option");
    optionHTML.value = i;
    optionHTML.textContent = i;
    console.log(optionHTML.value);
    selectYear.appendChild(optionHTML);
  }
};

const interfaz = new UI();

document.addEventListener("DOMContentLoaded", () => {
  interfaz.llenarOpciones(); //Llenar Select con años.
  eventListeners();
});

function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  resultado.innerHTML = "";

  //Leer Marca, Año, Tipo
  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    interfaz.mostrarError("No paso la validacion, campos incompletos", "error");
    return;
  }
  else{
    interfaz.mostrarError("Cotizando...", "correcto");
  }

  //Instanciar Seguro
  const seguro = new Seguro(marca,year,tipo);

  //Con el proto cotizarlo
  seguro.cotizar();
}

Seguro.prototype.cotizar = function(){
    /*1. Americano 1.15
    2 Asiatico 1.05
    3 Europea 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base*1.15;
            break;
        case '2':
            cantidad = base*1.05;
            break;
        case '3':
            cantidad = base*1.35;
            break;
        default:
            break;

    }

    /*Cada año que la diferencia es mayor el costo
    se reduce en 3%*/

    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia*3)/100) * cantidad;

    /*Basico se multiplica por 30% mas
    Completo po 50%*/

    if(this.tipo === "basico"){
        cantidad += 0.3*cantidad;
    }else{
        cantidad += 0.5*cantidad;
    }
    
    interfaz.mostrarResultado(this, cantidad);
}

UI.prototype.mostrarResultado = function(seguro, total){

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('mt-10');
    resultadoDiv.innerHTML = `<p class= "header">Tu Resumen </p>
    <p class="font-bold">Total: ${total} </p>`;


    //Mostrar el spinner 
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(()=>{
        spinner.style.display = 'none';
            resultado.appendChild(resultadoDiv);

    }, 2000)

}

UI.prototype.mostrarError = function (mensaje, tipo) {
  if (mensaje !== "") {
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add(
      "uppercase",
      "text-white",
      "py-2",
      "text-center",
      "font-bold"
    );

    if (tipo === "error") {
      error.style.backgroundColor = "red";
      resultado.appendChild(error);

      setTimeout(() => {
        error.remove();
      }, 2000);
    }
    else if(tipo === 'correcto'){
        error.style.backgroundColor = "green";
        resultado.appendChild(error);

        setTimeout(() => {
          error.remove();
        }, 2000);
    }
  }
};
