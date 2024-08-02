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

const input = document.querySelector("#inputname");
let idPokemon = '77';

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    imgchooseyou.src = datapokemon.sprites.front_default;
    nomePokemon.innerHTML = datapokemon.name;
    numeroPokemon.innerHTML = datapokemon.id;
    tipo1Pokemon.innerHTML = datapokemon.types[0].type.name;
    tipo2Pokemon.innerHTML = datapokemon.types[1].type.name;
    pesoPokemon.innerHTML = datapokemon.weight * 0.45359237;
    alturaPokemon.innerHTML = datapokemon.game_indices.game_index[20].height;
    habilidades1.innerHTML = datapokemon.abilities[0].ability.name;
    habilidades2.innerHTML = datapokemon.abilities[1].ability.name;
}

showPokemon('6');


but2.addEventListener("click", () =>{
    showPokemon(eval(idPokemon='+1'));
});

but2.addEventListener("click", () =>{
    showPokemon(eval(idPokemon='+1'));
});

input.addEventListener("input", () =>{
    idPokemon = input.value;
});

document.querySelector('.form-busca').onsubmit = showPokemon('100');