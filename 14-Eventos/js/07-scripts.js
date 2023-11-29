//PREVENIR EVENT BUBBLING CON DELEGATION.
const cardDiv = document.querySelector(".card");

cardDiv.addEventListener('click', (e)=>{
    console.log(e.target.classList);

    if(e.target.classList.contains('titulo')){
        console.log("Diste click en titulo");
    }
    else if(e.target.classList.contains('precio')){
        console.log("Diste click en precio");
    }
    else if(e.target.classList.contains('card')){
        console.log("Diste click en card");
    }
})