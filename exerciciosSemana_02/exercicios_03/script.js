const valor1 = document.querySelector('.valor1')
const valor2 = document.querySelector('.valor2')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', ()=>{
    const primeiroValor = parseInt(valor1.value)
    const segundoValor = parseInt(valor2.value)

    resultado.innerText = `Soma dos dois valores: ${primeiroValor + segundoValor}\nSubtração: ${primeiroValor - segundoValor}\nMultiplicação: ${primeiroValor * segundoValor}\nDivisão: ${primeiroValor / segundoValor}`
})