document.addEventListener("DOMContentLoaded", () => {
  const emailFinal = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //Seleccionar Elementos de la interfaz
  const email = document.querySelector("#email");
  const asunto = document.querySelector("#asunto");
  const mensaje = document.querySelector("#mensaje");

  const formulario = document.querySelector("#formulario");

  const btnEnviar = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");

  //Asignar eventos
  email.addEventListener("blur", validar);
  asunto.addEventListener("blur", validar);
  mensaje.addEventListener("blur", validar);

  btnReset.addEventListener("click", limpiarForms);

  function limpiarForms(){
    email.value = "";
    asunto.value = "";
    mensaje.value = "";

    emailFinal.email = "";
    emailFinal.asunto = "";
    emailFinal.mensaje = "";
    habilitarEnviar();
  }

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e);
      emailFinal[e.target.id] = "";

      habilitarEnviar();
      return;
    }

    if (e.target.id === "email") {
      const resultado = validarEmail(e.target.value);
      if (!resultado) {
        mostrarAlerta("Email no valido", e);
      } else {
        limpiarAlerta(e);
      }
      emailFinal[e.target.id] = "";

      habilitarEnviar();

      return;
    }

    limpiarAlerta(e);

    //Llenar el email
    emailFinal[e.target.id] = e.target.value.trim().toLowerCase();
    console.log(emailFinal);

    habilitarEnviar();
  }

  function limpiarAlerta(e) {
    const alerta = e.target.parentElement.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function mostrarAlerta(contenido, e) {
    //Comprobar si ya existe alerta
    const alerta = e.target.parentElement.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }

    const error = document.createElement("p");
    error.textContent = contenido;
    error.classList.add(
      "uppercase",
      "bg-red-600",
      "font-bold",
      "text-white",
      "text-center",
      "py-2"
    );

    e.target.parentElement.appendChild(error);
  }

  function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultado = regex.test(email);
    console.log(resultado);

    if (resultado === true) {
      emailFinal.email = email;
    }

    return resultado;
  }

  function habilitarEnviar() {
    if (
      emailFinal.email !== "" &&
      emailFinal.asunto !== "" &&
      emailFinal.mensaje !== ""
    ) {
      btnEnviar.disabled = false;
      btnEnviar.style.opacity = 100;
    } else {
      btnEnviar.disabled = true;
      btnEnviar.classList.add('opacity-50');
    }
  }
});
