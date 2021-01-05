const pushModal = (livro) => {

    console.log(livro)

    // titulo
    const titulo = document.querySelector("#tituloDisplay")
    titulo.innerHTML = livro.volumeInfo.title

    const imgCont = document.querySelector("#imgLivroDisplay")
    imgCont.innerHTML = ""

    // img
    const img = document.createElement("img");
    const imglinks = livro.volumeInfo.imageLinks
    if (imglinks) {
        img.src = imglinks.thumbnail;
    } else {
        img.src = "https://via.placeholder.com/150x180"
    }
    imgCont.appendChild(img)

    // autores
    const authorsContainer = document.querySelector("#autorLivro")
    authorsContainer.innerHTML = ""
    livro.volumeInfo.authors.forEach(author => {
        authorsContainer.innerHTML += author
        if (livro.volumeInfo.authors.length > 1) {
            authorsContainer.innerHTML += ", "
        } 
    });

    // editora
    const editoraContainer = document.querySelector("#editoraLivro")
    editoraContainer.innerHTML = livro.volumeInfo.publisher

    // subtitulo
    const subtituloContainer = document.querySelector("#subtituloLivro")
    subtituloContainer.innerHTML = livro.volumeInfo.subtitle

    // generos
    const generoContainer = document.querySelector("#generosLivro")
    generoContainer.innerHTML = ""
    livro.volumeInfo.categories.forEach(genero => {
        generoContainer.innerHTML += genero + ", "
    })

    //descrição
    const descricaoContainer = document.querySelector("#displayDescription")
    descricaoContainer.innerHTML = ""
    let d_size = 750
    let descricao = livro.volumeInfo.description
    if (descricao.length <= d_size) {
        d_size = descricao.length
    }

    // limpeza da descricao
    descricao=descricao.replace(/<br>/gi, "\n");
    descricao=descricao.replace(/<br\s\/>/gi, "\n");
    descricao=descricao.replace(/<br\/>/gi, "\n");
    descricao=descricao.replace(/<b>/gi, "");
    descricao=descricao.replace(/<b\/>/gi, "");
    descricao=descricao.replace(/<\/b>/gi, "");
    descricao=descricao.replace(/<i>/gi, "");
    descricao=descricao.replace(/<\/i>/gi, "");

    for (let i = 0; i < d_size; i++) {
        descricaoContainer.innerHTML += descricao[i]
    }

    if (descricao.length >= 750) {
        descricaoContainer.innerHTML += "..."
    }

    const modal = document.querySelector(".modalLivro")
    modal.style.display = "flex"
    setTimeout(() => {
        modal.style.opacity = "1"
    }, 250);

    // link do livro
    const link = document.querySelector("#linkDoLivro")
    if (livro.volumeInfo.infoLink) {
        link.style.display = "block"
        link.href = livro.volumeInfo.infoLink
    } else {
        link.style.display = "none"
    }

}

// recebe um json com os dados de um livro e o insere no container de livros
const pushCard = (livro) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao";
    cartao.id = livro.id
    cartao.addEventListener("click", async (e) => {
        const livro = await idSearch(e.currentTarget.id)
        pushModal(livro)
    })

    // thumbnail
    const cardimg = document.createElement("div");
    const img = document.createElement("img");
    const imglinks = livro.volumeInfo.imageLinks
    if (imglinks) {
        img.src = imglinks.thumbnail;
    } else {
        img.src = "https://via.placeholder.com/150x180"
    } 

    cardimg.className = "card_imagem";
    cardimg.appendChild(img);

    // txt container
    const txtContainer = document.createElement("div")
    txtContainer.style.width = "100%"

    // titulo
    const cardtitle = document.createElement("div");
    const title = document.createElement("p");
    let sub_title = "";
    if (livro.volumeInfo.title) {
        let tamanho = livro.volumeInfo.title.length
        if (tamanho > 55) tamanho = 55 
        for (let i = 0; i < tamanho; i++) {
            if (livro.volumeInfo.title[i] !== undefined) {
                sub_title += livro.volumeInfo.title[i];
            }
        }
        if (tamanho === 55) sub_title += "..."
    } else {
        sub_title = "Livro sem Título"
    }
    title.innerHTML = sub_title;

    if (livro.volumeInfo.title.length > 26) {
        cardtitle.classList.add("longtitle")
    }

    cardtitle.classList.add("card_titulo");
    cardtitle.appendChild(title);

    // descrição
    const carddescricao = document.createElement("div");
    const descricao = document.createElement("p");
    

    carddescricao.className = "card_descricao";
    carddescricao.appendChild(descricao);
    
    let sub_descri = "";
    if (livro.volumeInfo.description) {
        for (let i = 0; i < 90; i++) {
            if (livro.volumeInfo.description[i]!== undefined) {
                sub_descri += livro.volumeInfo.description[i]
            }
        }
        if (livro.volumeInfo.description.length > 90) sub_descri += "..."
    } else {
        sub_descri = livro.volumeInfo.title + ", não possúi descrição."
    }
    
    descricao.innerHTML = sub_descri

    txtContainer.appendChild(cardtitle);
    txtContainer.appendChild(carddescricao)
    cartao.appendChild(cardimg)
    cartao.appendChild(txtContainer)

    document.querySelector("#displayCards").appendChild(cartao)
}
