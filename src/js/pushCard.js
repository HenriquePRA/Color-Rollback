// recebe um json com os dados de um livro e o insere no container de livros
const pushCard = (livro) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao";

    // thumbnail
    const cardimg = document.createElement("div");
    const img = document.createElement("img");
    img.src=livro.imageLinks.thumbnail;

    cardimg.className = "card_imagem";
    cardimg.appendChild(img);

    // txt container
    const txtContainer = document.createElement("div")

    // titulo
    const cardtitle = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = livro.title;

    if (livro.title.length > 26) {
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
    if (livro.description) {
        for (let i = 0; i < 90; i++) {
            sub_descri += livro.description[i];        
        }
    }
    sub_descri += "..."
    descricao.innerHTML = sub_descri

    txtContainer.appendChild(cardtitle);
    txtContainer.appendChild(carddescricao)
    cartao.appendChild(cardimg)
    cartao.appendChild(txtContainer)

    document.querySelector("#displayCards").appendChild(cartao)
}