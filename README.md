# Visar Livros :books:

<!--ts-->
   * [Sobre](#Sobre)
   * [Características](#Características)
   * [Requisitos](#Requisitos)
      * [Uso de programação funcional](#req)
      * [Criação de componentes dinâmicos](#req)
      * [Uso do FETCH API e JSON](#req)
      * [Uso de RegExp](#req)
      * [Uso de módulos com Webpack](#req)
   * [Status](#Status)
   * [Instalação](#instalação)
<!--te-->

<a name="Sobre"></a>
## Sobre :information_source:
Feito em 2019, fiz esse projeto para disciplina de linguagens de script, trata-se de uma pagina web integrada com a API de livros
do google, permite que o usuário realize buscas baseadas em título, autor, editora ou gênero de um livro.

<a name="Características"></a>
## Características :page_facing_up:
Faz uso de uma página HTML que é modificada conforme o usuário a usa, apesar de fazer o uso do framework de CSS bootstrap
possúi folha de estilos própria
  
![](https://github.com/HenriquePRA/Visar-Livros/blob/screenshots/src/screenshots/print1.JPG)

A pesquisa retorna um objeto javascript (json) com múltiplos registros que contem informaçãoes sobre livros esses registros são 
mapeados de modo que cada livro se transforma em um card com Imagem, título e descrição reduzida.

![](https://github.com/HenriquePRA/Visar-Livros/blob/screenshots/src/screenshots/print2.JPG)

Ao clicar em um card é feita outra requisição a API do google books que retorna todos o dados do lívro, esses dados são inseridos em
um modal que irá conter o título, autores, generos, desrição e link para a página do livro no google books.

![](https://github.com/HenriquePRA/Visar-Livros/blob/screenshots/src/screenshots/print3.JPG)

Apesar de fazer o uso do framework bootstrap possúi folha de estilos própria de forma a garantir responsividade de 350px até 4k.

![](https://github.com/HenriquePRA/Visar-Livros/blob/screenshots/src/screenshots/print4.JPG)
  
<a name="Requisitos"></a>
## Requisitos funcionais do projeto :clipboard:
<a name="req"></a>
- <b>Uso de programação funcional:</b> todos os scripts do projeto se comunicam com a página apenas através de funções. 
- <b>Criação de componentes dinâmicos:</b> Tanto o compenente que exibe os resultados quanto o que exibe um livro são dinâmicos.
- <b>Uso do FETCH API e JSON:</b> ao carregar a página através do FETCH API é carregado um JSON com as informações de um conjunto 
de livros.
- <b>Uso de RegExp:</b> Usa de expressões regulares para remover tags de html que geralmente estão contidas na descrição
de um livro
- <b>Uso de pacotes do JS:</b> Faz uso do babeljs para transpilar o código javascript moderno usado no projeto para um cógido
javascript em uma versão antiga de forma suportar que o projeto suporte browsers mais antigos.
- <b>Uso de módulos com Webpack</b> Sim, faz uso de 2 módulos, pushcard.js que exporta funções responsáveis por receber, tratar e 
inserir dados de um JSON no código da página, e search.js que exporta funções responsáveis por realizar as buscas googlebooks do 
que for pesquisado.

<a name="Status"></a>
## Status do Projeto :tada:
Finalizado ✌️

<a name="instalação"></a>
## Instalando e executando o projeto :running:

1. Clone o repositório.
2. Caso não tenha instale o npm em sua versão estável mais recente.
3. Abra um terminal e navegue até o diretório do projeto.
4. Execute o comando npm install.
5. Execute o comando npm start.
6. Em seu navegador acesse o link mostrado no terminal pelo serve.
