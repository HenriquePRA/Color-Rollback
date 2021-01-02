window.onload = () => {
    search("programming", 9).then((ret) => {

    })
}

// Barra de pesquisa
const navbarInput = document.querySelector("#navBarInput");
const navBarSearchbtn = document.querySelector("#navBarSearchbtn")

navBarSearchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const texto = navbarInput.value
    search(texto)
})


// Mais avaliados
const maisAvaliadosBtn = document.querySelector("#maisAvaliados");
maisAvaliadosBtn.addEventListener("click", () => {
    console.log("mais avaliados")
})

// Mais Recences
const maisRecentesBtn = document.querySelector("#maisRecentes");
maisRecentesBtn.addEventListener("click", () => {
    console.log("maisRecentesBtn")
}) 

// Melhores Avaliados
const melhoresAvaliadosBtn = document.querySelector("#melhoresAvaliados"); 
melhoresAvaliadosBtn.addEventListener("click", () => {
    console.log("melhoresAvaliados")
}) 

// Tendencias
const maisVistosBtn = document.querySelector("#maisVistos");
maisVistosBtn.addEventListener("click", () => {
    console.log("maisVistos")
})