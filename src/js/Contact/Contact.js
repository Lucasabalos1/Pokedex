const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");
const returButton = document.getElementById("return-button");
const formBtn = document.getElementById("send-button");

const toggleMenu = () => {
    modal.classList.toggle("visible");
    menuLateral.classList.toggle("show-menu");
    document.body.style.overflow = (modal.classList.contains("visible")) ? "hidden": "scroll";
}

const initializeAnimations = () => {
    window.sr = ScrollReveal();

    sr.reveal("header", {
        duration: 1000,
        origin: "bottom",
        distance: "-100px"
    });

    sr.reveal(".form-container", {
        duration: 1500,
        scale:0.9,
        delay:200
    });
}

returButton.addEventListener("click", ()=> {
    document.querySelector("header").scrollIntoView({behavior: "smooth"});
});

const verifyMail = () => {
    const email = document.getElementById("email_input").value;
    //El metodo some devuelve true si al menos un elemento cumple la condicion que se pide en la funcion
    return ["@gmail.com", "@hotmail.com", "@outlook"].some(domain => email.includes(domain));
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (!verifyMail()) {
        alert("Por favor, ingrese un correo electrónico válido con uno de los siguientes dominios: @gmail.com/.ar, @outlook.com/.ar, @hotmail.com/.ar");
        return;
    }
    
    formBtn.value = "ENVIANDO EMAIL...";

    const serviceID = 'default_service';
    const templateID = 'template_98e401c';

    emailjs.sendForm(serviceID, templateID, document.getElementById("form"))
    .then(() => {
        formBtn.value = 'ENVIAR EMAIL';
        console.log('Correo enviado exitosamente!');
        alert('Email mandado!');
        location.reload();
      }, (err) => {
        formBtn.value = 'ENVIAR EMAIL';
        console.log('Correo no enviado!');
        alert(JSON.stringify(err));
      });
})

btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);
document.addEventListener("DOMContentLoaded", initializeAnimations);