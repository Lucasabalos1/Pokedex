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

/*

TO-DO :


-Crear funcion para filtrado de nombres que se actualice a tiempo real

-Crear funcion para filtrar por tipos

-Crear funcion para filtrar por generaciones 



CREAR NUEVOS JS PARA:

-Agregar animacion de cuando aparezca en el viewport
*/

