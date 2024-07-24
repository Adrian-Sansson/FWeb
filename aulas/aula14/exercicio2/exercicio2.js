fetch("./exercicio2.json")
.then(Response=>Response.json())
.then(pessoas=>{
    for(const pessoa in pessoas)
    {
        let novoNome = document.createElement("p");
        novoNome.innerHTML = pessoas[pessoa].Nome;
        document.querySelector('h1').appendChild(novoNome);

        let novaIdade = document.createElement("p");
        novaIdade.innerHTML = pessoas[pessoa].Idade;
        document.querySelector('h1').appendChild(novaIdade);

        let novoCpf = document.createElement("p");
        novoCpf.innerHTML = pessoas[pessoa].Cpf;
        document.querySelector('h1').appendChild(novoCpf);

        let novoCel = document.createElement("p");
        novoCel.innerHTML = pessoas[pessoa].Cel;
        document.querySelector('h1').appendChild(novoCel);
    }
}
);