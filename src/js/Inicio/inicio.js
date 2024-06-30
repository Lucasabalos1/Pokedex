
const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");


// funcion que muestra u oculta el modal
const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
    document.body.style.overflow = (modal.classList.contains("visible")) ? "hidden": "scroll";
}

const initializeAnimations = () =>{
    window.sr = ScrollReveal();

    sr.reveal("header", {
        duration: 1000,
        origin: `bottom`,
        distance: `-100px`
    });

    sr.reveal(".principal-info-container", {
        duration: 2000,
        origin: `top`,
        distance: `-200px`
    });
}

btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);
document.addEventListener("DOMContentLoaded", initializeAnimations);