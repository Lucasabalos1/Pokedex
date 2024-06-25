const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");
const arrowButton = document.getElementById("arrow-button");
const advanceSearch = document.querySelector(".inferior-row");
const typeButtons = document.querySelectorAll(".types");
const returnButton = document.querySelector(".return-button")
const mainContainer = document.getElementById("main-container")
const inputSearch = document.getElementById("search-poke")


// funcion que muestra u oculta el modal
const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
    document.body.style.overflow = (modal.classList.contains("visible")) ? "hidden": "scroll";
}

// funcion que muestra u oculta la busqueda avanzada
const toggleAdvanceSearch = () => {
    advanceSearch.classList.toggle("show");
}

//Funcion que pone color a los botones de tipos dependiendo del tipo
const stylizeButtons = () =>{
    typeButtons.forEach(button => {
        let tipoSeleccionado = selectType(button.textContent);
        button.classList.add(tipoSeleccionado);
    });
}

//Funcion que se le pasa un tipo y devuelve su color 
const selectType= (tipo) =>{
    switch (tipo) {
        case "BUG":
            return "bug-type";
        case "NORMAL":
            return "normal-type";
        case "FIRE":
            return "fire-type";
        case "WATER":
            return "water-type";
        case "GRASS":
            return "grass-type";
        case "ELECTRIC":
            return "electric-type";
        case "ICE":
            return "ice-type";
        case "FIGHTING":
            return "fighting-type";
        case "GROUND":
            return "ground-type";
        case "FLYING":
            return "flying-type";
        case "PSYCHIC":
            return "psychic-type";
        case "ROCK":
            return "rock-type";
        case "GHOST":
            return "ghost-type";
        case "DRAGON":
            return "dragon-type";
        case "DARK":
            return "dark-type";
        case "STEEL":
            return "steel-type";
        case "FAIRY":
            return "fairy-type";
        case "POISON":
            return "poison-type";
        default:
            return "undefined";
    }
}

//funciones que estilizan los botones al darles click

const removeTypeSelected = () =>{
    typeButtons.forEach((button) => {
        button.classList.remove("selected-type")
    });
}

typeButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        removeTypeSelected();
        button.classList.add("selected-type");
    })
});

const removeGenSelected = () =>{
    gens.forEach((gen) => {
        gen.classList.remove("selected-gen");
    });
}

gens.forEach(gen =>{
    gen.addEventListener("click", () =>{
        removeGenSelected();
        gen.classList.add("selected-gen") 
    })
});

// funcion para el boton que te devuelve al principio de la pagina con una animacion
returnButton.addEventListener("click", ()=> {
    mainContainer.scrollIntoView({behavior: "smooth"})
})

// Filtro por nombre
inputSearch.addEventListener("input", () =>{

    let getInput = (inputSearch.value).toUpperCase();

    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) => { 
        let pokeName = card.firstElementChild.lastElementChild.children[1].textContent
        
        card.style.display = pokeName.includes(getInput) ? "block" : "none";
    });
});



//Filtro por tipos 

const showByType = (type) => {
    const cards = document.querySelectorAll(".pokemon-card-background")

    cards.forEach((card) => {
        
        let principalType = card.firstElementChild.lastElementChild.children[2].firstElementChild.innerHTML;  
        let secondaryType = card.firstElementChild.lastElementChild.children[2].children[1] || "undefined"

        card.style.display = (principalType == type || secondaryType == type) ? "block" : "none";
    });
}


typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("selected-type")) {
            showByType(button.innerHTML)
        }
    });
});


//eventos iniciales
document.addEventListener("DOMContentLoaded", stylizeButtons);
arrowButton.addEventListener("click", toggleAdvanceSearch);
btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

/*

TO-DO :

-pasar a limpio codigo que esta marcado
-optimizar tiempos de carga
-Agregar animacion de cuando aparezca en el viewport
-crear filtro por favoritos(?)

*/

