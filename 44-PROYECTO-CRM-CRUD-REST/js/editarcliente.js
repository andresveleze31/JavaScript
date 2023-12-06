import { actualizarCliente, obtenerCliente } from "./API.js";
import { imprimirMensaje } from "./funciones.js";

(function() {

    document.addEventListener("DOMContentLoaded", async() => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);
        llenarCampos(cliente);

        //Submit Formulario
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarCliente);
    })

    function llenarCampos(cliente){
        for(let propiedad in cliente){
            document.querySelector(`#${propiedad}`).value = `${cliente[propiedad]}`;
        }
    }    

    function validarCliente(e) {
      e.preventDefault();

      const parametrosURL = new URLSearchParams(window.location.search);
      const idCliente = parseInt(parametrosURL.get("id"));

      const nombre = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const telefono = document.querySelector("#telefono").value;
      const empresa = document.querySelector("#empresa").value;

      const cliente = {
        nombre:nombre,
        email:email,
        telefono:telefono,
        empresa:empresa,
        id: idCliente
      };

      if (validar(cliente)) {
        imprimirMensaje("Todos los campos son Obligatorios");
      }

      //Reescribe el Objeto
      actualizarCliente(cliente);

    }

    function validar(obj) {
      return !Object.values(obj).every((input) => input !== "");
    }

})();