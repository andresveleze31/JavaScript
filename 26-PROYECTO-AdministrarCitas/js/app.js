//VARIABLES SELECTORES
const mascota = document.querySelector("#mascota");
const propietario = document.querySelector("#propietario");
const telefono = document.querySelector("#telefono");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const sintomas = document.querySelector("#sintomas");

const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");
let modo = "agregar";

//EVENTOS
eventListeners();
function eventListeners() {
  mascota.addEventListener("change", datosCita);
  propietario.addEventListener("change", datosCita);
  telefono.addEventListener("change", datosCita);
  fecha.addEventListener("change", datosCita);
  hora.addEventListener("change", datosCita);
  sintomas.addEventListener("change", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

//CLASSES y Objeto
let citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

class Citas {
  constructor() {
    this.citas = [];
  }

  añadirCita(cita) {
    this.citas.push(cita);
    console.log(this.citas);
  }

  eliminarCita(idCita) {
    this.citas = this.citas.filter((cita) => {
      return cita.id !== parseInt(idCita);
    });
    console.log(this.citas);
    interfaz.mostrarCitas(this.citas);
    interfaz.imprimirAlerta("La cita se elimino correctamente", "exito");
  }

  editarCita(idCita) {
    const citaEditar = this.citas.find((cita) => {
      return cita.id === parseInt(idCita);
    });

    citaObj = citaEditar;
    interfaz.llenarFormulario();
  }

  actualizarCita(){

    this.citas.forEach(cita =>{
        if(cita.id === citaObj.id){
            cita.mascota = citaObj.mascota;
            cita.propietario = citaObj.propietario;
            cita.telefono = citaObj.telefono;
            cita.fecha = citaObj.fecha;
            cita.hora = citaObj.hora;
            cita.sintomas = citaObj.sintomas;
        }
    })

    interfaz.mostrarCitas(this.citas);

  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    divMensaje.textContent = mensaje;

    //Agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  llenarFormulario(){
    mascota.value = citaObj.mascota;
    propietario.value = citaObj.propietario;
    telefono.value = citaObj.telefono;
    fecha.value = citaObj.fecha;
    hora.value = citaObj.hora;
    sintomas.value = citaObj.sintomas;
    document.querySelector("#nueva-cita button").textContent = "Actualizar Informacion";
  }
  
  mostrarCitas(citas){

    this.limpiarHTML();
    citas.forEach(cita => {
        const citaHMTL = document.createElement('div');
        citaHMTL.classList.add('cita', 'p-3');
        citaHMTL.dataset.id = cita.id;

        const mascotaParrafo = document.createElement('h2');
        mascotaParrafo.textContent = cita.mascota;
        mascotaParrafo.classList.add('card-title', 'font-weight-bolder');

        const propietarioParrafo = document.createElement('p');
        propietarioParrafo.textContent = `Propietario: ${cita.propietario}`;

        console.log(propietarioParrafo);

        const propietarioTelefono = document.createElement("p");
        propietarioTelefono.textContent = `Telefono: ${cita.telefono}`;

        const propietarioFecha = document.createElement("p");
        propietarioFecha.textContent = `Fecha: ${cita.fecha}`;

        const propietarioHora = document.createElement("p");
        propietarioHora.textContent = `Hora: ${cita.hora}`;

        const propietarioSintomas = document.createElement("p");
        propietarioSintomas.textContent = `Sintomas: ${cita.sintomas}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
        btnEliminar.innerHTML = "Eliminar ";

        btnEliminar.addEventListener('click', eliminarCita);

        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn', 'btn-info');
        btnEditar.innerHTML = "Editar";

        btnEditar.addEventListener('click', editarCita);



        citaHMTL.appendChild(mascotaParrafo);
        citaHMTL.appendChild(propietarioParrafo);
        citaHMTL.appendChild(propietarioTelefono);
        citaHMTL.appendChild(propietarioFecha);
        citaHMTL.appendChild(propietarioHora);
        citaHMTL.appendChild(propietarioSintomas);
        citaHMTL.appendChild(btnEliminar);
        citaHMTL.appendChild(btnEditar);

        contenedorCitas.appendChild(citaHMTL);

    })

  }

  limpiarHTML(){
    contenedorCitas.innerHTML = "";
  }
}

const interfaz = new UI();
const administrarCitas = new Citas();

//FUNCIONES
function datosCita(e) {
  citaObj[e.target.id] = e.target.value;
  console.log(citaObj);
}

function nuevaCita(e) {
  e.preventDefault();

    if(modo === "agregar"){
      //Extraer informacion del objeto
      const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

      //Validar Campos.
      if (
        mascota === "" ||
        propietario === "" ||
        telefono === "" ||
        fecha === "" ||
        hora === "" ||
        sintomas === ""
      ) {
        interfaz.imprimirAlerta("Todos los campos son Obligatorios", "error");
        return;
      }

      //Crear Nueva Cita.
      citaObj.id = Date.now();
      administrarCitas.añadirCita({ ...citaObj });
      formulario.reset();
      reiniciarObjeto();

      interfaz.mostrarCitas(administrarCitas.citas);
      return;
    }

    administrarCitas.actualizarCita();
    formulario.reset();
    reiniciarObjeto();
    interfaz.mostrarCitas(administrarCitas.citas);

}

function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(e){
    const idCita = e.target.parentElement.dataset.id;
    administrarCitas.eliminarCita(idCita);
}

function editarCita(e){
    const idCita = e.target.parentElement.dataset.id;
    administrarCitas.editarCita(idCita);
}
