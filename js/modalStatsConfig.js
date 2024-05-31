/* TODO:
- Crear toda la logica de traer la info 
*/

const modalStats = document.querySelector(".modal-background");
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

        modalStatContainer.innerHTML = `
        <div class="modal-header-container">
                        
            <div class="modal-poke-name-container">
                <span class="poke-name">${poke.name.toUpperCase()}</span>
            </div>
            
            <div class="cross-container">
                <label for="cross-container" class="fa-solid fa-x"></label>
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
                                <span class="types-tittle">TIPOS</span>
                                <div class="types-cont">
                                    <span>TIPO A</span>
                                    <span>TIPO B</span>
                                </div>
                            </div>

                            <div class="hw-container">
                                <span class="poke-heigth">ALTURA: <b> ${poke.height} </b> CM/M </span>
                                <span class="poke-width">PESO: <b> ${poke.weight} </b> KG </span>
                            </div>

                            <div class="moves-container">
                                <span class="move-title">MOVIMIENTOS</span>
                                <ul class="ul_moves">
                                    <li>${poke.moves[0].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[1].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[2].move.name.toUpperCase()}</li>
                                    <li>${poke.moves[3].move.name.toUpperCase()}</li>
                                </ul>
                            </div>
                        
                            <div class="abilities">
                                <span class="abilities-title">HABILIDADES</span>
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
     
        modalStats.appendChild(modalStatContainer);
    });

}

if (document.querySelector(".cross-container")) {
    
    document.querySelector(".cross-container").addEventListener("click", () => {
        modalStats.classList.remove("show-stats");
    });    
}


/*

                <div class="modal-header-container">
                        
                    <div class="modal-poke-name-container">
                        <span class="poke-name">BULLBASAUR</span>
                    </div>
                        
                    <div class="cross-container">
                        <label for="cross-container" class="fa-solid fa-x"></label>
                    </div>
                </div>
    
                <div class="modal-main-container">
    
                    <section class="poke-info-section">
    
                        <div class="poke-container">
    
                            <div class="poke-image-container">
                                <div class="image-poke">
                                    <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" alt="">
                                </div>
                            </div>
            
                            <section class="poke-data-section">
                                <div class="poke-info-container">
    
                                    <div class="poke-id-container">
                                        <span class="poke-id">#1</span>
                                    </div>
    
                                    <hr>
    
                                    <div class="modal-poke-type">
                                        <span class="types-tittle">TIPOS</span>
                                        <div class="types-cont">
                                            <span>TIPO A</span>
                                            <span>TIPO B</span>
                                        </div>
                                    </div>
    
                                    <div class="hw-container">
                                        <span class="poke-heigth">ALTURA: </span>
                                        <span class="poke-width">PESO: </span>
                                    </div>
    
                                    <div class="moves-container">
                                        <span class="move-title">MOVIMIENTOS</span>
                                        <ul class="ul_moves">
                                            <li>MOV A</li>
                                            <li>MOV B</li>
                                            <li>MOV C</li>
                                            <li>MOV D</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="abilities">
                                        <span class="abilities-title">HABILIDADES</span>
                                        <div class="abilities-cont">
                                            <span>OVERGROW</span>
                                            <span>CHLOROPHYLL</span>
                                        </div>
                                    </div> 

                                    <div class="base-stats">
                                        <div class="stat-container">
                                            <span>HP:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                        <div class="stat-container">
                                            <span>ATTACK:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                        <div class="stat-container">
                                            <span>DEFENSE:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                        <div class="stat-container">
                                            <span>SPECIAL ATTACK:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                        <div class="stat-container">
                                            <span>SPECIAL DEFENSE:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                        <div class="stat-container">
                                            <span>SPEED:</span>
                                            <div class="stat-bar">
                                                <div class="bar"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
    
                        </div>
    
                    </section>
    
                </div>



*/