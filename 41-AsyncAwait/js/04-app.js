//Varias Promises

function descargarNuevosCliente() {
  return new Promise((resolve) => {
    console.log("Descargando cliente...");

    setTimeout(() => {
      resolve("Clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");

    setTimeout(() => {
      resolve("Pedidos fueron descargados");
    }, 5000);
  });
}

const app = async () => {
  try {
    const respuesta = await Promise.all([
      descargarNuevosCliente(),
      descargarNuevosPedidos(),
    ]);
  } catch (error) {
    console.log(error);
  }
};
