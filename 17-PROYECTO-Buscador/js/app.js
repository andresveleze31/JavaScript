//VARIABLES
//Select de busquedas.
const selectMarca = document.querySelector("#marca");
const selectYear = document.querySelector("#year");
const selectMinimo = document.querySelector("#minimo");
const selectMaximo = document.querySelector("#maximo");
const selectPuertas = document.querySelector("#puertas");
const selectTransmision = document.querySelector("#transmision");
const selectColor = document.querySelector("#color");

const contenedorFiltros = document.querySelector(".contenedorFiltros");

//Contenedor resultados
const resultado = document.querySelector("#resultado");

//Generar Objeto de Busqueda

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); //Muestra automoviles
  llenarSelectYear(); //Llena opciones de años
});

selectMarca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
});

selectYear.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
});

selectMinimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});

selectMaximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});

selectPuertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

selectTransmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

selectColor.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
});

contenedorFiltros.addEventListener("change", (e) => {
  filtrarAuto();
});

//FUNCIONES
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `Marca: ${auto.marca}, Modelo: ${auto.marca}, Precio: ${auto.precio}, Puertas: ${auto.precio}, Año: ${auto.year}, Transmision: ${auto.transmision}`;
    resultado.appendChild(autoHTML);
  });
}

function llenarSelectYear() {
  autos.forEach((auto) => {
    const yearHTML = document.createElement("option");
    yearHTML.value = auto.year;
    yearHTML.textContent = auto.year;
    selectYear.appendChild(yearHTML);
  });
}

function filtrarAuto() {
  const filtro = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(fitrarMin)
    .filter(filtrarMax)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  console.log(filtro);
    if (filtro.length === 0) {
      const error = document.createElement('p');
      error.textContent = "No hay Resultados";
      error.style.backgroundColor = "red";
      error.style.color = "white";
      resultado.innerHTML = "";
      resultado.appendChild(error);
      return;
    }
  resultado.innerHTML = "";
  filtro.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `Marca: ${auto.marca}, Modelo: ${auto.marca}, Precio: ${auto.precio}, Puertas: ${auto.precio}, Año: ${auto.year}, Transmision: ${auto.transmision}`;
    resultado.appendChild(autoHTML);
  });
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return marca === auto.marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return Number.parseInt(year) === auto.year;
  }
  return auto;
}

function fitrarMin(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= Number.parseInt(minimo);
  }
  return auto;
}

function filtrarMax(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= Number.parseInt(maximo);
  }
  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === Number.parseInt(puertas);
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision == transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color == color;
  }
  return auto;
}
