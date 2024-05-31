const cardsContainer = document.getElementById("pokemon-container");

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";


const obtainData = async (apiUrl) => {
    try {
        let requests = [];
        for (let i = 1; i <= 1025; i++) {
            requests.push(fetch(apiUrl + i));
        }

        let responses = await Promise.all(requests);
        let data = await Promise.all(responses.map(response => response.json()));

        data.forEach(poke => {
            drawData(poke);
        });
        
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main-container").style.display = "block";
        
    } catch (error) {
        console.log("La api fallo");
    }
}

const drawData = (poke) =>{
    let cardBacKground = document.createElement("DIV")
    
    let firstType = obtainType(poke.types[0].type.name);
    let secondType =  poke.types.length > 1 ? obtainType(poke.types[1].type.name) : "undefined";
    
    cardBacKground.classList.add("pokemon-card-background", firstType)
    

    if(poke.name == "mew") console.log("termine")
    if(poke.types.length == 1){
        cardBacKground.innerHTML = `
        <div class="pokemon-card">
            <div class="superior-card">
                <div class="image-container">
                    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="">
                </div>
            </div>
            <div class="inferior-info-card">
                <span class="poke-id">#${poke.id}</span>
                <span class="poke-name">${poke.name.toUpperCase()}</span>
                <div class="poke-type">
                    <span class="${firstType}">${poke.types[0].type.name.toUpperCase()}</span>
                </div>
                <div class="button-container">
                    <button class="button-info">MORE INFO</button>
                </div>
            </div>
        </div>
`
    }else{
        cardBacKground.innerHTML = `
        <div class="pokemon-card">
            <div class="superior-card">
                <div class="image-container">
                    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="">
                </div>
            </div>
            <div class="inferior-info-card">
                <span class="poke-id">#${poke.id}</span>
                <span class="poke-name">${poke.name.toUpperCase()}</span>
                <div class="poke-type">
                    <span class="${firstType}">${poke.types[0].type.name.toUpperCase()}</span>
                    <span class="${secondType}">${poke.types[1].type.name.toUpperCase()}</span>
                </div>
                <div class="button-container">
                    <button class="button-info">MORE INFO</button>
                </div>
            </div>
        </div>
`  
    }
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

document.addEventListener("DOMContentLoaded", obtainData(apiUrl));
