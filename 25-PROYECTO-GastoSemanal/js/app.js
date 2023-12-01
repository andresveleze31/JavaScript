//Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const listadoGastos = document.querySelector("#gastos ul");

let presupuesto;

//Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}

//Classes
class Presupuesto {
  constructor(presupuesto) {
    this.gastos = [];
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
  }

  añadirGasto(gasto) {
    this.gastos.push(gasto);
    this.actualizarRestante();
    interfaz.actualizarListadoGastos(this.gastos);
  }

  eliminarGasto(idGasto){
    this.gastos = this.gastos.filter((gasto) =>{
        return gasto.id !== idGasto;
    })
    this.actualizarRestante();
    interfaz.actualizarRestante(this.restante);
    interfaz.actualizarListadoGastos(this.gastos);
  }

  actualizarRestante(){
    let rest = this.presupuesto;
    this.gastos.forEach((gasto) =>{
        rest -= gasto.cantidad;
    })

    this.restante = rest;

    if(this.restante <= this.presupuesto*0.25){
        interfaz.cambiarColorRestante();
    }

    interfaz.actualizarRestante(this.restante);
  }
}


class UI {
  insertarPresupuesto(cantidad) {
    const total = document.querySelector("#total");
    const restante = document.querySelector("#restante");

    total.textContent = cantidad.presupuesto;
    restante.textContent = cantidad.restante;
  }

  añadirError() {
    const error = document.createElement("p");
    error.textContent = "Campos Invalidos";
    error.classList.add("error");
    formulario.appendChild(error);

    setInterval(() => {
      error.remove();
    }, 2000);
  }

  actualizarListadoGastos(gastos){

    listadoGastos.innerHTML = "";

    gastos.forEach(gasto =>{
        const contenedorGasto = document.createElement('div');
        contenedorGasto.classList.add('gasto');
        contenedorGasto.setAttribute('data-id', gasto.id);

        const nombreGasto = document.createElement('p');
        nombreGasto.textContent = gasto.nombre;

        const cantidadGasto = document.createElement('p');
        cantidadGasto.textContent = gasto.cantidad;
        cantidadGasto.classList.add('cantidad');

        const btnEliminar = document.createElement('a');
        btnEliminar.textContent = "X";
        btnEliminar.classList.add("btn");
        btnEliminar.setAttribute("data-id", gasto.id);

        btnEliminar.addEventListener('click', eliminarGasto);

        contenedorGasto.appendChild(nombreGasto);
        contenedorGasto.appendChild(cantidadGasto);
        contenedorGasto.appendChild(btnEliminar);
        listadoGastos.appendChild(contenedorGasto);
    })


  }

  imprimirExito() {
    const exito = document.createElement("p");
    exito.textContent = "Correcto";
    exito.classList.add("correcto");
    formulario.appendChild(exito);

    setInterval(() => {
      exito.remove();
    }, 2000);
  }

  actualizarRestante(restante){
     document.querySelector("#restante").textContent = restante;
  }

  cambiarColorRestante(){
    const restante = document.querySelector("#restante").parentElement.parentElement;
    restante.style.backgroundColor = 'red';
    restante.style.color = "white";
  }
}

const interfaz = new UI();

//Funciones.
function preguntarPresupuesto() {
  const presupuestoInput = Number.parseInt(
    prompt("Cuanto presupuesto tiene pensado")
  );

  if (presupuestoInput < 100 || isNaN(presupuestoInput)) {
    alert("Presupuesto Insuficiente debe ser mayor a 100");
    preguntarPresupuesto();
  }

  presupuesto = new Presupuesto(presupuestoInput);
  interfaz.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    //Leer Inputs
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //Validar Inputs.
    if(nombreGasto === "" || cantidadGasto === "" || isNaN(parseInt(cantidadGasto)) ){
        interfaz.añadirError();
    }
    else{
        interfaz.imprimirExito();
    }

    const gasto = {
        id: Date.now(),
        nombre: nombreGasto,
        cantidad: cantidadGasto
    }

    presupuesto.añadirGasto(gasto);
    formulario.reset();
}

function eliminarGasto(e){

    const idGasto = parseInt(e.target.getAttribute('data-id'));
    console.log(idGasto);
    presupuesto.eliminarGasto(idGasto);
}