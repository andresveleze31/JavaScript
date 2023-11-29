//Parametros en Funciones por default..

function saludar(nombre = "Desconocido", apellido = "Sin apellido"){
    console.log("Hola " + nombre + " " + apellido);
}

saludar("Andres", "Velez");
saludar("Andres");
saludar();
