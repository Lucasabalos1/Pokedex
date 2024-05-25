const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");
const arrowButton = document.getElementById("arrow-button");
const advanceSearch = document.querySelector(".inferior-row");
const buttons = document.querySelectorAll(".types");
const gens = document.querySelectorAll(".gen");
const returnButton = document.querySelector(".return-button")
const mainContainer = document.getElementById("main-container")
const inputSearch = document.getElementById("search-poke")


// funcion que muestra u oculta el modal
const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
}

// funcion que muestra u oculta la busqueda avanzada
const toggleAdvanceSearch = () => {
    advanceSearch.classList.toggle("show");
}

//Funcion que pone color a los botones de tipos dependiendo del tipo
const stylizeButtons = () =>{
    buttons.forEach(button => {
        let tipoSeleccionado = selectType(button.textContent);
        button.classList.add(tipoSeleccionado);
    });
}

//Funcion que se le pasa un tipo y devuelve su color 
const selectType= (tipo) =>{
    switch (tipo) {
        case "BICHO":
            return "bug-type";
        case "NORMAL":
            return "normal-type";
        case "FUEGO":
            return "fire-type";
        case "AGUA":
            return "water-type";
        case "PLANTA":
            return "grass-type";
        case "ELECTRICO":
            return "electric-type";
        case "HIELO":
            return "ice-type";
        case "LUCHA":
            return "fighting-type";
        case "TIERRA":
            return "ground-type";
        case "VOLADOR":
            return "flying-type";
        case "PSIQUICO":
            return "psychic-type";
        case "ROCA":
            return "rock-type";
        case "FANTASMA":
            return "ghost-type";
        case "DRAGON":
            return "dragon-type";
        case "SINIESTRO":
            return "dark-type";
        case "ACERO":
            return "steel-type";
        case "HADA":
            return "fairy-type";
        case "VENENO":
            return "poison-type";
        default:
            return "undefined";
    }
}

//funciones que estilizan los botones al darles click

const removeTypeSelected = () =>{
    buttons.forEach((button) => {
        button.classList.remove("selected-type")
    });
}

buttons.forEach(button =>{
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


// Filtro por generacion

const genRange = {
    KANTO: [1,151],
    JOHTO: [152,251],
    HOENN: [252,386],
    SINNOH: [387,493],
    TESELIA: [494,649],
    KALOS: [650,721],
    ALOLA: [722,809],
    GALAR: [810,905],
    PALDEA: [906,1025],
    TODAS: [1,1025]
}

const showByGen = (start, end) => {
    const cards = document.querySelectorAll(".pokemon-card-background");

    console.log(start);
    console.log(end);

    cards.forEach((card) => {
        getId = card.firstElementChild.lastElementChild.children[0].innerHTML.substring(1);

        card.style.display = (getId >= start && getId <= end) ? "block" : "none";
    });
}

gens.forEach((gen) =>{
    gen.addEventListener("click", () =>{
        if(gen.classList.contains("selected-gen")){
            const getRange = genRange[gen.textContent];
            showByGen(getRange[0], getRange[1]);
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

-Crear funcion para filtrar por tipos

-Agregar animacion de cuando aparezca en el viewport

*/

