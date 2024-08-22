const valor1 = document.querySelector('.valor1');
const valor2 = document.querySelector('.valor2');
const valor3 = document.querySelector('.valor3');
const botao = document.querySelector('.botao');
const resultado = document.querySelector('.resultado');

const mediaCalculo = (result) => {
    resultado.innerText = `A média dos números é: ${result}`;
}

botao.addEventListener('click', () => {
    const num1 = parseFloat(valor1.value);
    const num2 = parseFloat(valor2.value);
    const num3 = parseFloat(valor3.value);
    
    const media = (num1 + num2 + num3) / 3;
    
    mediaCalculo(media);
});
