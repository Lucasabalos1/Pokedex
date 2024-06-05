/* TODO:
- Crear toda la logica de traer la info 
*/

const modalStats = document.querySelector(".modal-background");



const randomNumber = () => {
    return Math.floor(Math.random() * 50);
}

//funcion seleccionadora de color de la barra (a pulir mejor)
const selectColorBar = (stat) => {
    let paseNumber = parseInt(stat);
    
    if (paseNumber >= 0 && paseNumber <= 20) {
        return "bar-very-low";
    } else if (paseNumber >= 21 && paseNumber <= 40) {
        return "bar-low";
    } else if (paseNumber >= 41 && paseNumber <= 60) {
        return "bar-medium";
    } else if (paseNumber >= 61 && paseNumber <= 85) {
        return "bar-semi-max";
    } else if (paseNumber >= 86 && paseNumber <= 100) {
        return "bar-max";
    } else {
        return "undefined";     
    }
}

const modificateBars = (bars) => {
    bars.forEach((bar) => {
        bar.style.width = (bar.innerHTML > 100) ? "100%" : `${bar.innerHTML}%`;
        const barClass = (bar.innerHTML > 100) ? "bar-max" : selectColorBar(bar.innerHTML); 
        bar.classList.add(barClass);
    });
}

setTimeout(() => {

    const moreInfo = document.querySelectorAll(".button-info");

    
    moreInfo.forEach((button) => {
    button.addEventListener("click", () => {
        
        modalStats.classList.add("show-stats");
        let getId = button.parentElement.parentElement.children[0].innerHTML.substring(1)
        
        drawModal(`https://pokeapi.co/api/v2/pokemon/${getId}`)
    });
});
}, 5000);



const drawModal = (url) => {
     let response = fetch(url).then(res => res.json());
     
     response.then(poke => {

        const modalStatContainer = document.createElement("DIV");

        modalStatContainer.classList.add("modal-stats-container");


        if (poke.types.length == 1) {
            
            modalStatContainer.innerHTML = `
            <div class="modal-header-container">
                        
                <div class="modal-poke-name-container">
                    <span class="poke-name">${poke.name.toUpperCase()}</span>
                </div>
            
                
            </div>

        <div class="modal-main-container">

            <section class="poke-info-section">

                <div class="poke-container">

                    <div class="poke-image-container">
                        <div class="image-poke">
                            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="">
                        </div>
                    </div>

                    <section class="poke-data-section">
                        <div class="poke-info-container">

                            <div class="poke-id-container">
                                <span class="poke-id">#${poke.id}</span>
                            </div>

                            <hr>

                            <div class="modal-poke-type">
                                <span class="types-tittle">TYPE</span>
                                <div class="types-cont">
                                    <span>${poke.types[0].type.name.toUpperCase()}</span>
                                </div>
                            </div>

                            <div class="hw-container">
                                <span class="poke-heigth">HEIGTH: <b> ${poke.height.toString().slice(0, -1) + "," + poke.height.toString().slice(-1)}</b> m </span>
                                <span class="poke-width">WEIGHT: <b> ${poke.weight.toString().slice(0, -1) + "," + poke.height.toString().slice(-1)}</b> kg</span>
                            </div>

                            <div class="moves-container">
                                <span class="move-title">SOME MOVEMENTS</span>
                                <ul class="ul_moves">
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                </ul>
                            </div>
                        
                            <div class="abilities">
                                <span class="abilities-title">ABILITIES</span>
                                <div class="abilities-cont">
                                    <span>${poke.abilities[0].ability.name.toUpperCase()}</span>
                                    <span>${poke.abilities[1].ability.name.toUpperCase()}</span>
                                </div>
                            </div> 

                            <div class="base-stats">
                                <div class="stat-container">
                                    <span>HP:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[0].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>ATTACK:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[1].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>DEFENSE:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[2].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPECIAL ATTACK:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[3].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPECIAL DEFENSE:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[4].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPEED:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[5].base_stat}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>`
        }else{
            
        modalStatContainer.innerHTML = `
        <div class="modal-header-container">
                        
            <div class="modal-poke-name-container">
                <span class="poke-name">${poke.name.toUpperCase()}</span>
            </div>
            
            
        </div>

        <div class="modal-main-container">

            <section class="poke-info-section">

                <div class="poke-container">

                    <div class="poke-image-container">
                        <div class="image-poke">
                            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="">
                        </div>
                    </div>

                    <section class="poke-data-section">
                        <div class="poke-info-container">

                            <div class="poke-id-container">
                                <span class="poke-id">#${poke.id}</span>
                            </div>

                            <hr>

                            <div class="modal-poke-type">
                                <span class="types-tittle">TYPES</span>
                                <div class="types-cont">
                                    <span>${poke.types[0].type.name.toUpperCase()}</span>
                                    <span>${poke.types[1].type.name.toUpperCase()}</span>
                                </div>
                            </div>

                            <div class="hw-container">
                            <span class="poke-heigth">HEIGTH: <b> ${poke.height.toString().slice(0, -1) + "," + poke.height.toString().slice(-1)}</b>m </span>
                            <span class="poke-width">WEIGHT: <b> ${poke.weight.toString().slice(0, -1) + "," + poke.height.toString().slice(-1)}</b>kg</span>
                            </div>

                            <div class="moves-container">
                                <span class="move-title">SOME MOVEMENTS</span>
                                <ul class="ul_moves">
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[randomNumber()].move.name.toUpperCase()}</li>
                                </ul>
                            </div>
                        
                            <div class="abilities">
                                <span class="abilities-title">ABILITIES</span>
                                <div class="abilities-cont">
                                    <span>${poke.abilities[0].ability.name.toUpperCase()}</span>
                                    <span>${poke.abilities[1].ability.name.toUpperCase()}</span>
                                </div>
                            </div> 

                            <div class="base-stats">
                                <div class="stat-container">
                                    <span>HP:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[0].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>ATTACK:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[1].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>DEFENSE:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[2].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPECIAL ATTACK:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[3].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPECIAL DEFENSE:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[4].base_stat}</div>
                                    </div>
                                </div>
                                <div class="stat-container">
                                    <span>SPEED:</span>
                                    <div class="stat-bar">
                                        <div class="bar">${poke.stats[5].base_stat}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>`
        }
     
        modalStats.appendChild(modalStatContainer);

        modificateBars(document.querySelectorAll(".bar"))
    });

}

    
document.querySelector(".cross-container").addEventListener("click", () => {
     modalStats.classList.remove("show-stats");
     modalStats.removeChild(modalStats.lastElementChild);
 });    



/*
-Pasar a limpio las partes marcadas

-retocar el diseño

- ver si puedo integrar descripcion del pokemon
*/