const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

const printa = (fahrenheit, kelvin) =>{
    resultado.innerText = `A temperatura em Fahrenheit é: ${fahrenheit}\nA temperatura em Kelvin é: ${kelvin}`;
}

botao.addEventListener('click', () =>{
    const valorUser = parseFloat(valor.value);
    const fahrenheit = (valorUser * 9/5) + 32;
    const kelvin = valorUser + 273.15;
    printa(fahrenheit, kelvin)
})