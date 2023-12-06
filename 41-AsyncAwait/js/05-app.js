const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
