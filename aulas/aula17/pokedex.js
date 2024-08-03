const imgchooseyou = document.querySelector("#imgpokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon = document.querySelector("#numeroPokemon");
const tipo1Pokemon = document.querySelector("#tipo1Pokemon");
const tipo2Pokemon = document.querySelector("#tipo2Pokemon");
const pesoPokemon = document.querySelector("#pesoPokemon");
const alturaPokemon = document.querySelector("#alturaPokemon");
const but1 = document.querySelector("#but1");
const but2 = document.querySelector("#but2");
const habilidades1 = document.querySelector("#habilidade1");
const habilidades2 = document.querySelector("#habilidade2");
const input = document.querySelector("#inputName")
const form = document.querySelector(".form-busca")
const somP = document.querySelector("#audioP");

let idPokemon = 1;

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    idPokemon = datapokemon.id;
    imgchooseyou.src = datapokemon.sprites.front_default;
    nomePokemon.innerHTML = datapokemon.name;
    numeroPokemon.innerHTML = datapokemon.id;
    tipo1Pokemon.innerHTML = datapokemon.types[0].type.name;
    tipo2Pokemon.innerHTML = datapokemon.types[1].type.name;
    pesoPokemon.innerHTML = datapokemon.weight * 0.45359237.toFixed(1);
    alturaPokemon.innerHTML = datapokemon.height;
    habilidades1.innerHTML = datapokemon.abilities[0].ability.name;
    habilidades2.innerHTML = datapokemon.abilities[1].ability.name;
    somP.src= datapokemon.cries.latest;
}

const AudioP = document.querySelector('#audioPlayer');
const InputRange = document.querySelector('#input-range');
const ButtonPlay = document.querySelector('#Play');

InputRange.addEventListener("input", () => { AudioP.volume = InputRange.value;});

ButtonPlay.addEventListener("click", () => {
    AudioP.play();
});

showPokemon('6');


but1.addEventListener("click", () =>{
    if(idPokemon>1)
    {
        idPokemon -=1;
        showPokemon(idPokemon);
    }
});

but2.addEventListener("click", () =>{
    {
      idPokemon +=1;
      showPokemon(idPokemon);
    }
});

input.addEventListener("input", () =>{
    idPokemon = toString(input.value);
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
});

showPokemon(idPokemon);