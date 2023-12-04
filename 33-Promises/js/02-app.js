const paises = [];

function nuevoPais(pais, callback){

    paises.push(pais);
    callback();

}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallBackHell(){
    setTimeout(() =>{
        nuevoPais("Alemania", mostrarPaises);
        
        setTimeout(() =>{
            nuevoPais("Argentina", mostrarPaises);

        }, 3000)
    },3000)
}

iniciarCallBackHell();

