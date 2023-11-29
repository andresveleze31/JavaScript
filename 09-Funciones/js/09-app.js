const reproductor = {
    reproducir: function(id){
        console.log("Reproduciendo cancion... " + id);
    },

    pausar: function(){
        console.log("Pausando...");
    }
}

reproductor.reproducir(1);
reproductor.reproducir("Bruno Mars");

reproductor.pausar();

reproductor.borrar = function(){
    console.log("Borrando Cancion");
}

reproductor.borrar();
