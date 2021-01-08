import { search } from "./js/search"
import { pushCard } from "./js/pushcard"

// Script carregado apenas quando a página carrega
window.onload = () => {
    fetch("./src/indicacoes.json")
    .then(async (indicacoes) => {
        resetContainer("Escolhas da Plataforma")
        indicacoes = await indicacoes.json()        
        indicacoes.forEach(livro => {
            pushCard(livro)
        });
    }).catch(e => {
        console.log(e)
    })
}

// Função que renomeia o header do contaider dos cards e apaga seu conteudo
const resetContainer = (headerName) => {
    const header = document.querySelector("#displayHeader").firstElementChild
    header.innerHTML = headerName
    const CardsContainer = document.querySelector("#displayCards")
    CardsContainer.innerHTML = ""
}

// bloco de pesquisa
document.querySelector("#searchBtn").addEventListener("click", (e) => {
    e.preventDefault()
    const texto = document.querySelector("#searchInput").value
    let tipo = document.querySelector('input[name="pesquisarPor"]:checked').id

    search(texto, undefined).then((ret) => {
        if (ret) {
            resetContainer("Resultados da Pesquisa: " + tipo + " = " + texto)
            ret.forEach(livro => {
                pushCard(livro)
            })            
        }
    })
})

document.querySelectorAll(".radiobtn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.firstElementChild.checked = true;
    })
})

// fechar modal 
document.querySelector(".fechar").addEventListener("click", () => {
    let modalLivro = document.querySelector(".modalLivro");
    modalLivro.style.opacity = "0"
    setTimeout(() => {
        modalLivro.style.display = "none"
    }, 400);
})