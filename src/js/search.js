const search = async (nome, limite) => {
    if ((nome === "") || (nome === null)) {
        alert("Campo de pesquisa vazio !")
    } 
    else {
        // formação do link de pesquisa
        const linkDeBusca_1 = await new Promise(resolve => {

            let linkDeBusca = "https://www.googleapis.com/books/v1/volumes?q=" + nome
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