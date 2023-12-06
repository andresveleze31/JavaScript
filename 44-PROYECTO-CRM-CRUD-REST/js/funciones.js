export function imprimirMensaje(mensaje) {
  const alerta = document.querySelector(".bg-red-500");

  if (!alerta) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.add(
      "text-center",
      "bg-red-500",
      "text-white",
      "font-bold",
      "uppercase",
      "py-[20px]",
      "mt-6"
    );

    formulario.appendChild(mensajeDiv);

    setTimeout(() => {
      mensajeDiv.remove();
    }, 3000);
  }
}