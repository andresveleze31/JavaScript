const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    console.log(resultado);
  });
});

const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    new Notification("Esta es la Notificacion");
  }
});
