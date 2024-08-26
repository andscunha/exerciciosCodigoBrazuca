let soma = 0
let valor = parseInt(prompt('Digite o valor a ser somado: '))
const resultado = document.querySelector('.resultado')


while(valor !== 0){
    soma += valor
    valor = parseInt(prompt(`Digite outro valor: `))
}

resultado.innerText = soma