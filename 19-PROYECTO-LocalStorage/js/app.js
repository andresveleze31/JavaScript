//VARIABLES
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Events
document.addEventListener("DOMContentLoaded", () =>{
    cargarTweets();
})

formulario.addEventListener("submit", agregarTweet);


//Funciones
function cargarTweets(){
    tweets = JSON.parse(localStorage.getItem('tweets'));
    crearTweet();
}

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    if(tweet.trim() === ""){
        mostrarError();
        return;
    }

    //Añadir al arreglo de tweets
    const objetoTweet = {
        id: Date.now(),
        texto: tweet
    }
    tweets.push(objetoTweet);
    
    crearTweet();
    addLocalStorage(tweets);
}

function mostrarError(){
    const error = document.createElement('p');
    error.textContent = "El campo no puede ir vacio";
    error.classList.add('error');
    formulario.appendChild(error);

    setTimeout(()=>{
        error.remove();
    },2000)
}

function crearTweet(){

    listaTweets.innerHTML = "";
    tweets.forEach(tweet =>{

        //Boton Eliminar
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('borrar-tweet');
        btnEliminar.textContent = "X";

        //Event Listener
        btnEliminar.addEventListener("click",  (e) =>{
            e.preventDefault();
            borrarTweet(tweet.id);            

        })


        //Creacion HTML
        const tweetHTML = document.createElement('li');
        tweetHTML.innerHTML = tweet.texto;
        tweetHTML.appendChild(btnEliminar);
        listaTweets.appendChild(tweetHTML);
    })
}

function addLocalStorage(tweets) {
    const tweetsString = JSON.stringify(tweets);
    localStorage.setItem("tweets", tweetsString);
}

function borrarTweet(id){

    const newTweets = tweets.filter(tweet => {
        return tweet.id !== id;
    })

    tweets = newTweets;
    crearTweet();
    addLocalStorage(tweets);


}