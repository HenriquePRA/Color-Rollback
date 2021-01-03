// recebe um json com os dados de um livro e o insere no container de livros
const pushCard = (livro) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao";

    // thumbnail
    const cardimg = document.createElement("div");
    const img = document.createElement("img");
    img.src=livro.volumeInfo.imageLinks.thumbnail;

    cardimg.className = "card_imagem";
    cardimg.appendChild(img);

    // txt container
    const txtContainer = document.createElement("div")
    txtContainer.style.width = "100%"

    // titulo
    const cardtitle = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = livro.volumeInfo.title;

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