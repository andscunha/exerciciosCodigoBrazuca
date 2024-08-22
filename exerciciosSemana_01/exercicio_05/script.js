const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

const printa = (print) =>{
    resultado.innerText = `A temperatura em Fahrenheit é: ${print}`
}

botao.addEventListener('click', () =>{
    const valorUser = parseInt(valor.value);
    const fahrenheit = (valorUser * 9/5) + 32;
    printa(fahrenheit)
})