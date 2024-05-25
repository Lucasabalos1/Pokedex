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


// const isMobileDevice = () => {
//     return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }


// setTimeout(() =>{
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelector(".main-container").style.display = "block";
// }, isMobileDevice == true ? 3500 : 1500 )



const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
}

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


document.addEventListener("DOMContentLoaded", stylizeButtons);



arrowButton.addEventListener("click", toggleAdvanceSearch);
btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        button.classList.toggle("unselected-type")
    })
});

gens.forEach(gen =>{
    gen.addEventListener("click", () =>{
        gen.classList.toggle("unselected-gen")
    })
});


returnButton.addEventListener("click", ()=> {
    mainContainer.scrollIntoView({behavior: "smooth"})
})

// Filtro por nombre
inputSearch.addEventListener("input", () =>{

    let getInput = (inputSearch.value).toUpperCase();

    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) => {
        
        let pokeName = card.firstElementChild.lastElementChild.children[1].textContent
        
        if (!pokeName.includes(getInput)) {
            card.style.display = "none";
        }else{
            card.style.display = "block";
        }

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
    PALDEA: [906,1025]
}

const disguiseByRange = (start, end) =>{
    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) =>{
        
        console.log(start)
        console.log(end)
        
        getId = card.firstElementChild.lastElementChild.children[0].innerHTML.substring(1);
        if ( getId >= start && getId <= end ){ 
            card.style.display = "none";
        }
    });
} 

const showCard = (start, end) =>{
    const cards = document.querySelectorAll(".pokemon-card-background");

    cards.forEach((card) =>{
        
        console.log(start)
        console.log(end)
        
        getId = card.firstElementChild.lastElementChild.children[0].innerHTML.substring(1);
        if ( getId >= start && getId <= end ){ 
            card.style.display = "block";
        }
    });
}

gens.forEach((gen) => {
    gen.addEventListener("click", () =>{
        if(gen.classList.contains("unselected-gen")){
            const getRange = genRange[gen.textContent]
            disguiseByRange(getRange[0],getRange[1])
        }else{
            if (!gen.classList.contains("unselected-gen")) {
                const getRange = genRange[gen.textContent]
                showCard(getRange[0],getRange[1])
            }
        }
    });
});




/*

TO-DO :

-Crear funcion para filtrar por tipos

-Solucionar bug filtro gen cuando se busca un pokemon de una region ocultada con el filtro, este aparece y cuando se borra todo lo del input aparece toda la pokedex

-Cambiar filtro de generacion, en vez de ocultar, que solo muestre esa region
CREAR NUEVOS JS PARA:

-Agregar animacion de cuando aparezca en el viewport
*/

