fetch("./exercicio3.json")
.then(Response=>Response.json())
.then(cursos=>{
    for(const curso in cursos)
    {
        let buscaCurso= document.createElement("p");
        buscaCurso.innerHTML = cursos[curso];
        document.querySelector('h1').appendChild(buscaCurso);
    }
}
);