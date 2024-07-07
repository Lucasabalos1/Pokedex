const cardsContainer = document.getElementById("pokemon-container");
const gens = document.querySelectorAll(".gen");

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

window.sr = ScrollReveal();

const obtainData = async (apiUrl, start, end) => {
    try {
        let requests = [];
        for (start; start <= end; start++) {
            requests.push(fetch(apiUrl + start));
        }

        let responses = await Promise.all(requests);
        let data = await Promise.all(responses.map(response => response.json()));

        data.forEach(poke => {
            drawData(poke);
        });
        
        sr.reveal(".pokemon-container", {
            duration: 2500,
            origin: `top`,
            distance: `-100px`
        });

        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main-container").style.display = "block";
        initializeInfoButtons();
    } catch (error) {
        console.log("La api fallo");
    }
}

const drawData = (poke) =>{
    let cardBacKground = document.createElement("DIV")
    
    let firstType = obtainType(poke.types[0].type.name);
    let secondType =  poke.types.length > 1 ? obtainType(poke.types[1].type.name) : "undefined";
    
    cardBacKground.classList.add("pokemon-card-background", firstType)
    
    cardBacKground.innerHTML = `
    <div class="pokemon-card">
        <div class="superior-card">
            <div class="image-container">
                <img loading = "lazy" src="${poke.sprites.other["official-artwork"].front_default}" alt="pokemon">
            </div>
        </div>
        <div class="inferior-info-card">
            <span class="poke-id">#${poke.id}</span>
            <span class="poke-name">${poke.name.toUpperCase()}</span>
            <div class="poke-type">
                <span class="${firstType}">${poke.types[0].type.name.toUpperCase()}</span>
                ${poke.types.length > 1 ? `<span class="${secondType}">${poke.types[1].type.name.toUpperCase()}</span>` : ``}
            </div>
            <div class="button-container">
                <button class="button-info">MORE INFO</button>
            </div>
        </div>
    </div>
`
    cardsContainer.appendChild(cardBacKground);
} 

function obtainType(type) {
    switch (type) {
        case "bug":
            return "bug-type";
        case "dark":
            return "dark-type";
        case "dragon":
            return "dragon-type";
        case "electric":
            return "electric-type";
        case "fairy":
            return "fairy-type";
        case "fighting":
            return "fighting-type";
        case "fire":
            return "fire-type";
        case "flying":
            return "flying-type";
        case "ghost":
            return "ghost-type";
        case "grass":
            return "grass-type";
        case "ground":
            return "ground-type";
        case "ice":
            return "ice-type";
        case "normal":
            return "normal-type";
        case "poison":
            return "poison-type";
        case "psychic":
            return "psychic-type";
        case "rock":
            return "rock-type";
        case "steel":
            return "steel-type";
        case "water":
            return "water-type";
        default:
            return "undefined";
    }
}

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

gens.forEach((gen) => {
    gen.addEventListener("click", () => { 
        const getRange = genRange[gen.textContent];
        cardsContainer.innerHTML = "";
        obtainData(apiUrl, getRange[0], getRange[1]);
    });
});

document.addEventListener("DOMContentLoaded", obtainData(apiUrl,1 , 151));