const filme = document.querySelector('.filme')
const ano = document.querySelector('.ano')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', ()=>{
    resultado.innerText = `Filme: ${filme.value}\nAno: ${ano.value}`
})