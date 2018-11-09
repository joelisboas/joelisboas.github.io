let botao = document.querySelector(".botao_sanduiche");
let lateral = document.querySelector(".nav_lateral");
let fole = document.querySelectorAll(".fole");
let conteudo = document.querySelectorAll(".conteudo");

function mostrarMenu() {
    lateral.classList.toggle("show");
}
botao.addEventListener("click", mostrarMenu);

// ------------------------------------------------

function mostrarConteudo(i){
    conteudo[i].classList.toggle("show");
    for(let j=0; j < conteudo.length; j++) {
        if(j != i)
            conteudo[j].classList.remove("show");
    }
}

for(let i=0; i < fole.length; i++)
    fole[i].addEventListener("click", function(){
        mostrarConteudo(i);
    });

