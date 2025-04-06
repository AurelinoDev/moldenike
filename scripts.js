let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")
// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
    
    body.style.background = cor
    botao.style.background = cor
    tenis.src = imagem
}