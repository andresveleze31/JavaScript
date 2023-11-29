const puntaje = "100";

if(puntaje == 100){ //No estricto.
    console.log("Condicion Exitosa");
}else{
    console.log("Condicion No Exitosa");
}

if (puntaje === 100) { //Estricto
  console.log("Condicion Exitosa");
} else {
  console.log("Condicion No Exitosa");
}

if (puntaje != 100) { //!= Diferente
  console.log("Condicion Exitosa");
} else {
  console.log("Condicion No Exitosa");
}

if (puntaje !== 100) { //Estricta en tipo y valor.
  //!= Diferente
  console.log("Condicion Exitosa");
} else {
  console.log("Condicion No Exitosa");
}
