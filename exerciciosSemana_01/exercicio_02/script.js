const valor1 = document.querySelector('.valor1')
const valor2 = document.querySelector('.valor2')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

const criaLi = () => {
    const li = document.createElement('li')
    return li
}

const criaCalculo = (textoInput) => {
    const li = criaLi()
    li.innerText = textoInput
    resultado.appendChild(li)
}

botao.addEventListener('click', function(){
    const resultadoSoma = Number(valor1.value) + Number(valor2.value)
    criaCalculo(resultadoSoma)
})