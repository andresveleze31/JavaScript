//Async Await

function descargarClientes(){
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() =>{

            if(!error){
                resolve("EL Listado se descargo");
            }
            else{
                reject("Hubo un error");
            }
        }, 3000)

    })
}

async function ejecutar() {
    try {
        //Bloquea la ejecucion del codigo
      const respuesta = await descargarClientes(); 
    } catch (error) {
      console.log(error);
    }
}
    
ejecutar();
