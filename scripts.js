let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")

function mudarVisual(cor, imagem) {
    body.style.background = cor
    botao.style.background = cor

    // Remove a animação
    tenis.classList.remove("animar")

    // Força o reflow pra reiniciar a animação
    void tenis.offsetWidth

    // Troca a imagem
    tenis.src = imagem

    // Reaplica a classe de animação
    tenis.classList.add("animar")
}
window.addEventListener("load", () => {
    let tenis = document.querySelector(".imagem-tenis");
    // Força o reflow para garantir que a animação seja aplicada
    void tenis.offsetWidth;
    // Adiciona a classe que dispara a animação
    tenis.classList.add("animar");
});
