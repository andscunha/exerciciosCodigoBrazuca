const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', ()=>{
    const valorPeso = parseFloat(peso.value)
    const valorAltura = parseFloat(altura.value)
    let imc = valorPeso/(valorAltura * valorAltura)

    resultado.innerText = `O seu IMC é: ${imc.toFixed(2)}`

})