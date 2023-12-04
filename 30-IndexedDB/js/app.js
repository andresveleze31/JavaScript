document.addEventListener("DOMContentLoaded", ()=>{
    crmDB();
})

function crmDB(){

    //Crear una base de datos ----> Nombre, Version
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = () =>{
        console.log("Hubo un error");
    }

    //Si se creo bien
    crmDB.onsuccess = () =>{
        console.log("Base de datos creada");
    }

    //Configuracion base de datos. ---> Para definir
    //Tablas y Columnas.
    crmDB.onupgradeneeded = (e) =>{
        console.log(e.target);
    }
}