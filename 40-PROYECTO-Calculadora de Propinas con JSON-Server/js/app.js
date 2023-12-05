//Creacion de APIS

//SELECTORES Y VARIABLES
let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  //Validar Campos
  if (mesa === "" || hora === "") {
    mostrarAlerta("Todos los campos son obligatorios");
    return;
  }

  //Almacenar Campos
  cliente.mesa = mesa;
  cliente.hora = hora;

  console.log(cliente);

  //Ocultar MODAL
  const modalFormulario = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  //Mostrar Secciones
  mostrarSecciones();

  //Obtener Platillos
  obtenerPlatillos();
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".invalid-feedback");

  if (!existeAlerta) {
    const alerta = document.querySelector("div");
    alerta.classList.add("invalid-feedback", "d-block", "text-center");
    alerta.textContent = mensaje;

    document.querySelector(".modal-body form").appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");

  seccionesOcultas.forEach((seccion) => {
    seccion.classList.remove("d-none");
  });
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      mostrarPlatillos(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos .contenido");
  platillos.forEach((platillo) => {
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");

    const nombre = document.createElement("div");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("div");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = `$${platillo.precio}`;

    const categoria = document.createElement("div");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.id = platillo.id;
    inputCantidad.value = 0;
    inputCantidad.classList.add("form-control");

    //Funcion que detecta cantidad y platillo
    inputCantidad.onchange = function () {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({...platillo, cantidad});
    };

    const agregar = document.createElement("div");
    agregar.classList.add("col-md-2");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {

    if(producto.cantidad > 0){

        let existe;

        cliente.pedido.forEach(p => {
            if(p.id === producto.id){
                p.cantidad = producto.cantidad;
                existe = true;
            }
        })

        if(existe){
            cliente.pedido.push(producto);
        }

    }
    else if(producto.cantidad === 0){
        
        const resultado = cliente.pedido.filter(articulo => {
            return articulo.id !== producto.id;
        })

        cliente.pedido = resultado;

    }

    //Mostrar Resumen
    actualizarResumen();

}

function actualizarResumen(){


    const contenido = document.querySelector('#resumen .contenido');
    contenido.innerHTML = "";

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3' , 'shadow');

    const mesa = document.createElement('p');
    mesa.textContent = `Mesa: ${cliente.mesa}`;
    mesa.classList.add('fw-bold');

    const hora = document.createElement('p');
    hora.textContent = `Mesa: ${cliente.hora}`;
    hora.classList.add("fw-bold");

    const heading = document.createElement('h3');
    heading.textContent = "Platillos Consumidos";
    heading.classList.add('my-4', 'text-center');

    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);

    contenido.appendChild(resumen)

}
