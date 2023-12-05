//SELECTORES y VARIABLES
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const registrosPorPagina = 40;

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", validarFormulario);
});

function validarFormulario(e) {
  e.preventDefault();
  const termino = document.querySelector("#termino").value;

  if (termino === "") {
    mostrarMensaje("Ingrese termino de busqueda");
    return;
  }

  buscarImagenes(termino);


}

function mostrarMensaje(mensaje) {
  const alerta = document.querySelector(".bg-red-500");

  if (!alerta) {
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add(
      "font-bold",
      "py-2",
      "uppercase",
      "text-white",
      "bg-red-500",
      "mt-5",
      "text-center"
    );
    formulario.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 3000);
  }
}

function buscarImagenes(termino){

    const key = "41073505-74e9edf8a8010d876cd8f0cae";
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}`;

    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(data => {
            const totalPaginas = calcularPaginas(data.totalHits);
            console.log(totalPaginas);
            mostrarImagenes(data.hits);
        })
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina));
}

function mostrarImagenes(imagenes){
    resultado.innerHTML = "";

    imagenes.forEach(imagen => {

        const {previewURL, likes, views, largeImageURL} = imagen;

        resultado.innerHTML += `
            <div class= "w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class= "w-full" src="${previewURL}">
                    <div class= "grid grid-cols-2 p-2 text-center">
                        <p class="font-bold">Likes: ${likes} </p>
                        <p class="font-bold">Views: ${views} </p>
                    </div>
                    <a  href="${largeImageURL}" class="font-bold bg-blue-500 uppercase block text-white text-center p-3 hover:bg-yellow-500 hover:text-black">Ver Imagen</a>
                </div>
            </div>        
        `;
    })
}
