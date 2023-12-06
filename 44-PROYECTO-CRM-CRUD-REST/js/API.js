const url = "http://localhost:4000/clientes";

//Crear Cliente
export const nuevoCliente = async (cliente) => {

    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json"
            }
        })
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
        
    }
};

//Obtener Clientes
export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data;        
    } catch (error) {
        console.log(error);        
    }
};

//Eliminar Cliente
export const eliminarCliente = async (id) => {

    try {
      await fetch(`${url}/${id}`,{
        method:"DELETE"
      });
      window.location.href = "index.html";
    } catch (error) {
      console.log(error);
    }

}

//Obtener un Cliente.
export const obtenerCliente = async (id) => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const data = await respuesta.json();
        return data;        
        
    } catch (error) {
        console.log(error);
        
    }
}

//Actualizar un Cliente.
export const actualizarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type" : "application/json"
      }
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

