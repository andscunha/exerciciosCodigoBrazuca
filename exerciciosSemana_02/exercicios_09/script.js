const valor = document.querySelector('.valor');
const resultadoIndice = document.querySelector('.resultadoIndice');
const botao = document.querySelector('.botao');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', ()=>{
    let frase = valor.value
    let indice = resultadoIndice.value
    let quantidade = 0
    let pos = frase.indexOf(indice)

    while(pos != -1){
        quantidade++
        pos = frase.indexOf(indice, pos + 1)
    }

    resultado.innerText = quantidade
})