let priceSpan = document.querySelector('#valor')
priceSpan = priceSpan.textContent.replace(' $', '')

let valorSacola = document.querySelector('#valor-sacola')

const botaoSacola = document.querySelector('#botao-sacola')

function adicionaSacola(){
    valorSacola.innerText = priceSpan
}
botaoSacola.addEventListener('click',adicionaSacola)