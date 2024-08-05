// Seleciona os elementos que serão utilizados para mostrar as informações.
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

// Inicia a variável que armazena o (id) do Pokémon que é exibido.
let idPokemon = 1;

// Função criada para buscar dados de um Pokémon na API.
const fetchPokemon = async(pokemon) => {
    // Realiza a "busca" na API sobre o Pokémon e retorna os dados em formato JSON.
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

// Função criada para exibir as informações dos Pokémons.
const showPokemon = async (pokemon) => {
    const datapokemon = await fetchPokemon(pokemon); // Busca os dados dos Pokémons
    idPokemon = datapokemon.id; // Muda o (id) do Pokémon
    imgchooseyou.src = datapokemon.sprites.front_default; // Muda a imagem do pokemon
    nomePokemon.innerHTML = datapokemon.name; // Muda o nome do Pokémon
    numeroPokemon.innerHTML = datapokemon.id; // Muda o número do Pokémon
    tipo1Pokemon.innerHTML = datapokemon.types[0].type.name; // Muda o tipo 1 do Pokémon
    tipo2Pokemon.innerHTML = datapokemon.types[1].type.name; // Muda o tipo 2 do Pokémon
    pesoPokemon.innerHTML = (datapokemon.weight *0.45359237).toFixed(1); // Muda o peso do Pokémon (convertido para Kg)
    alturaPokemon.innerHTML = datapokemon.height; // Muda a altura do Pokémon
    habilidades1.innerHTML = datapokemon.abilities[0].ability.name; // Muda a habilidade 1 do Pokémon  
    habilidades2.innerHTML = datapokemon.abilities[1].ability.name; // Muda a habilidade 2 do Pokémon
    somP.src = datapokemon.cries.latest; // Muda o som do Pokémon
}

// (audioPlayer) = busca o audio de fundo
const AudioP = document.querySelector('#audioPlayer');
// (input-range) = define o volume do audio
const InputRange = document.querySelector('#input-range');
// (play) = faz o audio tocar
const ButtonPlay = document.querySelector('#Play');

// Ajusta o volume do áudio com base no valor do controle deslizante(input-range).
InputRange.addEventListener("input", () => { AudioP.volume = InputRange.value;});

// Reproduz o áudio quando o botão de (play) for clicado.
ButtonPlay.addEventListener("click", () => {
    AudioP.play();
});

/*Cria um evento para o botão de (anterior), que exibe o Pokémon com o
(id) menor do que ja está exibido, que não vai funcionar caso o (id) "1" esteja sendo exibido.  */
but1.addEventListener("click", () =>{
    if(idPokemon>1)
    {
        idPokemon -=1;
        showPokemon(idPokemon);
    }
});

// Cria um evento para o botão de (próximo), que exibe o Pokémon com o (id) maior do que ja está exibido.
but2.addEventListener("click", () =>{
    {
      idPokemon +=1;
      showPokemon(idPokemon);
    }
});

// Atualiza o (id) do Pokémon com base no que for digitado no (input).
input.addEventListener("input", () =>{
    idPokemon = toString(input.value); // Conversão de (String) para (Number)
});

// Atualiza a imagem do Pokémon com base no que for digitado no (input)
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    showPokemon(input.value.toLowerCase()); // Exibe as informações do Pokémon com base no valor do campo de entrada
});

// Inicia a exibição do Pokémon com o (id) armazenado em (idPokemon).
showPokemon(idPokemon);