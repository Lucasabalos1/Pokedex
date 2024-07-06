const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");
const arrowButton = document.getElementById("arrow-button");
const advanceSearch = document.querySelector(".inferior-row");
const typeButtons = document.querySelectorAll(".types");
const returnButton = document.querySelector(".return-button");
const mainContainer = document.getElementById("main-container");
const inputSearch = document.getElementById("search-poke");

const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
    document.body.style.overflow = (modal.classList.contains("visible")) ? "hidden": "scroll";
}

const toggleAdvanceSearch = () => {
    advanceSearch.classList.toggle("show");
}

const stylizeButtons = () =>{
    typeButtons.forEach(button => {
        let tipoSeleccionado = selectType(button.textContent);
        button.classList.add(tipoSeleccionado);
    });
}

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

const removeTypeSelected = () =>{
    typeButtons.forEach((button) => {
        button.classList.remove("selected-type");
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
        gen.classList.add("selected-gen");
        removeTypeSelected();
    })
});

const initializeAnimations = () =>{
    window.sr = ScrollReveal();

    sr.reveal("header", {
        duration: 1500,
        origin: `bottom`,
        distance: `-100px`
    });

    sr.reveal(".acordion", {
        duration: 1000,
        origin: `rigth`,
        distance: `-200px`
    });
}

returnButton.addEventListener("click", ()=> {
    mainContainer.scrollIntoView({behavior: "smooth"});
})

inputSearch.addEventListener("input", () =>{

    let getInput = (inputSearch.value).toUpperCase();

    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) => { 
        let pokeName = card.firstElementChild.lastElementChild.children[1].textContent;
        
        card.style.display = pokeName.includes(getInput) ? "block" : "none";
    });
});


const showByType = (type) => {
    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) => {
        
        let principalType = card.firstElementChild.lastElementChild.children[2].firstElementChild.innerHTML;  
        let secondaryType = card.firstElementChild.lastElementChild.children[2].children[1] || "undefined";

        card.style.display = (principalType == type || secondaryType == type) ? "block" : "none";
    });
}


typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("selected-type")) {
            showByType(button.innerHTML);
        }
    });
});


document.addEventListener("DOMContentLoaded", stylizeButtons);
document.addEventListener("DOMContentLoaded", initializeAnimations);
arrowButton.addEventListener("click", toggleAdvanceSearch);
btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

