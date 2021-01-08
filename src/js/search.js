// função que busca o button com o tipo de pesquisa selecionada 
const getTipoSel = () => {
    const listaOpcoes = {
        "Título":"",
        "Autor":"inauthor:",
        "Editora":"inpublisher:",
        "Gênero":"subject:"
    }
    const selecionado = document.querySelector('input[name="pesquisarPor"]:checked')
    if (selecionado) return listaOpcoes[selecionado.id]
    else return ""
} 

// função que busca multiplos livros na api do google books
export const search = async (nome, limite) => {
    getTipoSel()
    if ((nome === "") || (nome === null)) {
        alert("Campo de pesquisa vazio !")
    } 
    else {
        // formação do link de pesquisa
        const linkDeBusca_1 = await new Promise(resolve => {
            let linkDeBusca = "https://www.googleapis.com/books/v1/volumes?q=" + getTipoSel() + nome
            if (limite !== undefined) linkDeBusca += "&maxResults=" + limite
            else linkDeBusca += "&maxResults=" + 15
            resolve(linkDeBusca)
        })
        // busca pelos livros
        try {
            const res = await fetch(linkDeBusca_1, { method: 'get' })
            const resjson = await res.json()
            if (resjson.totalItems === 0) { alert("Nenhum Resultado !"); return null } 
            else { return resjson.items }
        } catch (err) {
            console.error(err)
        }
    }
}

// função que busca um unico livro na api do google
export const idSearch = async (id) => {
    if (!id) {
        alert("Erro ao abrir o livro, recarregue a página ou tente novamente !")
    } else {
        const res = await fetch("https://www.googleapis.com/books/v1/volumes/" + id, { method: 'get' })
        const resjson = await res.json()
        return resjson
    }
}