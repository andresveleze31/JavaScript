function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;
    setTimeout(() => {
      if (!error) {
        resolve("EL Listado se descargo");
      } else {
        reject("Hubo un error");
      }
    }, 3000);
  });
}

const ejecutar = async () => {
  try {
    //Bloquea la ejecucion del codigo
    const respuesta = await descargarClientes();
  } catch (error) {
    console.log(error);
  }
};
