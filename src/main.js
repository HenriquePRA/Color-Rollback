const resetContainer = (headerName) => {
    const header = document.querySelector("#displayHeader").firstElementChild
    header.innerHTML = headerName
    const CardsContainer = document.querySelector("#displayCards")
    CardsContainer.innerHTML = ""
}

window.onload = () => {
    search("programming", 24).then((ret) => {
        console.log(ret)
        resetContainer("Popular sobre Programação")
        ret.forEach(livro => {
            pushCard(livro)
        });
    })
}

// Barra de pesquisa
const navbarInput = document.querySelector("#navBarInput");
const navBarSearchbtn = document.querySelector("#navBarSearchbtn")

navBarSearchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const texto = navbarInput.value
    search(texto).then((ret) => {
        search(texto).then((ret) => {
            resetContainer("Resultados da Pesquisa: " + texto)
            ret.forEach(livro => {
                pushCard(livro)
            })
        })
    })
})