//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciar = document.querySelector("#vaciar-carrito");


let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //Agregar Curso al carrito
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    btnVaciar.addEventListener('click', vaciarCarrito);

}


function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log(e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer el contenido del card y extrae la info del curso
function leerDatosCurso(curso){
    console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    validarCantidadCursos(infoCurso);


}

function validarCantidadCursos(cursoSelect){

    const indice = articulosCarrito.findIndex((articulo) => {
        return cursoSelect.nombre === articulo.nombre;
    });

    if(indice !== -1){
        articulosCarrito[indice].cantidad++;
    }
    else{
        articulosCarrito.push(cursoSelect);
    }   

    console.log(articulosCarrito);
    carritoHTML();
}

function vaciarCarrito(){

    articulosCarrito = []
    carritoHTML();

}

function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const id = e.target.getAttribute("data-id");

    const newCarrito = articulosCarrito.filter((articulo) => {
      return articulo.id !== id;
    });

    articulosCarrito = newCarrito;
    console.log(newCarrito);
    carritoHTML();
  }
}

//Mostrar el Carrito de Compras

function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    articulosCarrito.forEach((articulo) => {
        const cursoHTML = document.createElement('tr');
        cursoHTML.innerHTML = `
        <td>
            <img src= ${articulo.imagen} width=100>
        </td>
        <td>
             ${articulo.nombre}
        </td>
        <td>
             ${articulo.precio}
        </td>
        <td>
             ${articulo.cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${articulo.id}">X</a>
        </td>
        `;
        //Agregar al tbody
        contenedorCarrito.appendChild(cursoHTML);
    })
}



function limpiarHTML(){
    contenedorCarrito.innerHTML = "";
}