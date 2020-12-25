// Barra de pesquisa
const navbarInput = document.querySelector("#navBarInput");
const navBarSearchbtn = document.querySelector("#navBarSearchbtn")

navBarSearchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const texto = navbarInput.value
})