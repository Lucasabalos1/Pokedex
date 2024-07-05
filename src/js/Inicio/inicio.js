const modal = document.getElementById("modal-menu-container");
const menuLateral = document.querySelector(".info-menu-container");
const btnOpenMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close");
const container = document.getElementById("random-pokemon-section");
const searchButton = document.querySelector(".search-button")

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

    sr.reveal(".search-container", {
        scale: 0.8,    
        duration: 1500,
        reset: true
    });

    sr.reveal(".random-pokemon-section", {
        duration: 1500,
        origin: "rigth",
        distance: "-100px"
    });
}

const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 1025);
}

const generatePokemon = async (numberRandom) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberRandom}`)
        
        const poke = await response.json();
        
        const pokeContainer = document.createElement("DIV");

        pokeContainer.classList.add("random-pokemon-container");

        pokeContainer.innerHTML = `
                <div class="pokemon-image-container">
                     <img src="${poke.sprites.other["official-artwork"].front_default}" alt="pokemon">
                </div>
                <section class="info-pokemon-section">
                    <div class="info-pokemon-container">
                        <div class="poke-name-container">
                            <span class="poke-name">${poke.name.toUpperCase()}</span>
                        </div>
                        <div class="poke-types">
                            <span class="type">TYPES:</span>
                            <span class="first-type">${poke.types[0].type.name.toUpperCase()}</span>
                            <span class="second-type">${poke.types.length > 1 ? `<span>${poke.types[1].type.name.toUpperCase()}</span>` : ``}</span>
                        </div>
                        <div class="h-container">

                            <span class="poke-heigth">HEIGTH: ${poke.height >= 10 ? `<b>${poke.height.toString().slice(0, -1) + "." + poke.height.toString().slice(-1)}M</b>` : `<b>${poke.height.toString().slice(0, -1) + "0." + poke.height.toString().slice(-1)}M</b>`}</span>
                        </div>
                        <div class="w-container">
                            <span class="poke-width">WEIGHT: ${poke.weight >= 10 ? `<b>${poke.weight.toString().slice(0, -1) + "." + poke.weight.toString().slice(-1)}KG</b>` : `<b>${poke.weight.toString().slice(0, -1) + "0." + poke.weight.toString().slice(-1)}KG</b>`}</span>
                        </div>
                    </div>
                </section> `
        container.appendChild(pokeContainer);
    }catch{
        throw new Error("Ingrese un pokemon valido")
    }
}

document.querySelector(".return-button").addEventListener("click", ()=> {
    document.querySelector("header").scrollIntoView({behavior: "smooth"});
})

searchButton.addEventListener("click", () => {
    const pokemon = document.querySelector(".search-input");
    container.innerHTML = "";
    generatePokemon(pokemon.value.toLowerCase());
    setTimeout(() => {
        document.querySelector(".random-pokemon-section").scrollIntoView({behavior: "smooth"});
    }, 100);
});

btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);
document.addEventListener("DOMContentLoaded", initializeAnimations);
document.addEventListener("DOMContentLoaded", generatePokemon(generateRandomNumber()));