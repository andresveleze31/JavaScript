//For in.

const automovil = {
    modelo: "Camaro",
    year: 1969,
    motor: 6.0
}

for(let propiedad in automovil){
    console.log("Nombre de la propiedad: " + propiedad);
    console.log("Valor de la propiedad: " + automovil[propiedad]);
}