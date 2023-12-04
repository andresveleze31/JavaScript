//SELECTORES
const selectCategorias = document.querySelector("#categorias");
const resultado = document.querySelector("#resultado");
const modal = new bootstrap.Modal("#modal", {});
const favoritosDiv = document.querySelector(".favoritos");

if (favoritosDiv) {
  llenarFavoritos();
}

document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  obtenerCategorias();
  selectCategorias.addEventListener("change", mostrarRecetas);
}

function obtenerCategorias() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      mostrarCategorias(data.categories);
    });
}

function mostrarCategorias(categorias) {
  categorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria.strCategory;
    option.textContent = categoria.strCategory;

    selectCategorias.appendChild(option);
  });
}

function mostrarRecetas() {
  limpiarHTML(resultado);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategorias.value}`;
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      mostrarRecetasHTML(data.meals);
    });
}

function mostrarRecetasHTML(recetas = []) {
  recetas.forEach((receta) => {
    const recetaContenedor = document.createElement("div");

    recetaContenedor.classList.add("col-md-4");

    const recetaCard = document.createElement("div");
    recetaCard.classList.add("card", "mb-4");

    const recetaImagen = document.createElement("img");
    recetaImagen.src = receta.strMealThumb ?? receta.imagen;
    recetaImagen.classList.add("card-img-top");
    recetaImagen.alt = "Imagen Receta";

    const recetaCardBody = document.createElement("div");
    recetaCardBody.classList.add("card-body");

    const recetaHeading = document.createElement("h3");
    recetaHeading.classList.add("card-title", "mb-3");
    recetaHeading.textContent = receta.strMeal ?? receta.titulo;

    const recetaButton = document.createElement("button");
    recetaButton.classList.add("btn", "btn-danger", "w-100");
    recetaButton.textContent = "Ver Receta";
    recetaButton.dataset.bsTarget = "#modal";
    recetaButton.dataset.bsToggle = "modal";
    recetaButton.onclick = function () {
      seleccionarReceta(receta.idMeal ?? receta.id);
    };

    //Inyectar en el HTML
    recetaCardBody.appendChild(recetaHeading);
    recetaCardBody.appendChild(recetaButton);

    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaCardBody);

    recetaContenedor.appendChild(recetaCard);

    resultado.appendChild(recetaContenedor);
  });
}

function limpiarHTML(elemento) {
  elemento.innerHTML = "";
}

function seleccionarReceta(id) {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      mostrarRecetaModal(data.meals[0]);
    });
}

function mostrarRecetaModal(receta) {
  console.log(receta);

  const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

  //Añadir contenido
  const modalTitle = document.querySelector(".modal .modal-title");
  modalTitle.textContent = strMeal;

  const modalBody = document.querySelector(".modal .modal-body");
  modalBody.innerHTML = `
    <img class= "img-fluid" src= "${strMealThumb}"/>
    <h3 class="my-3">Instrucciones</h3>
    <p>${strInstructions}</p>

    <h3 class:"my-3">Ingredientes</h3>
    `;

  const listGroup = document.createElement("ul");
  listGroup.classList.add("list-group");

  for (let i = 1; i <= 20; i++) {
    if (receta[`strIngredient${i}`]) {
      const ingrediente = receta[`strIngredient${i}`];
      const cantidad = receta[`strMeasure${i}`];

      const ingredientLi = document.createElement("li");
      ingredientLi.classList.add("list-group-item");
      ingredientLi.textContent = `${ingrediente} - ${cantidad}`;

      listGroup.appendChild(ingredientLi);
    }
  }

  modalBody.appendChild(listGroup);

  const modalFooter = document.querySelector(".modal-footer");
  limpiarHTML(modalFooter);

  //Botones de cerrar y fav
  const btnFavorito = document.createElement("button");
  btnFavorito.classList.add("btn", "btn-danger", "col");
  btnFavorito.textContent = existeFavorito(idMeal)
    ? "Agregar Favorito"
    : "Eliminar Favorito";

  //LocalStorage
  btnFavorito.onclick = function () {
    if (existeFavorito(idMeal)) {
      eliminarFavorito(idMeal);
      return;
    }

    agregarFavorito({
      id: idMeal,
      titulo: strMeal,
      imagen: strMealThumb,
      instrucciones: strInstructions,
    });
  };

  //Botones de cerrar y fav
  const btnCerrar = document.createElement("button");
  btnCerrar.classList.add("btn", "btn-secondary", "col");
  btnCerrar.textContent = "Cerrar";

  btnCerrar.onclick = function () {
    modal.hide();
  };

  modalFooter.appendChild(btnFavorito);
  modalFooter.appendChild(btnCerrar);

  //Mostrar Modal
  modal.show();
}

function agregarFavorito(receta) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

  if (!existeFavorito(receta.id)) {
    favoritos.push(receta);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

function existeFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  return favoritos.some((favorito) => {
    return favorito.id === id;
  });
}

function eliminarFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

  const newFavoritos = favoritos.filter((fav) => {
    return fav.id !== id;
  });

  localStorage.setItem("favoritos", JSON.stringify(newFavoritos));
}

function llenarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

  if(favoritos.length){
    mostrarRecetasHTML(favoritos);
    return;
  }

  const noFavoritos = document.createElement('p');
  noFavoritos.textContent = "No hay favoritos aun";
  noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
}
