const imgchooseyou = document.querySelector("#imgpokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon = document.querySelector("#numeroPokemon");

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    imgchooseyou.src = datapokemon.sprites.front_default;
    nomePokemon.innerHTML = datapokemon.name;
    numeroPokemon.innerHTML = datapokemon.number;
}

showPokemon('6');

