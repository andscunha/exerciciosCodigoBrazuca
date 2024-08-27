const valor = document.querySelector('.valor');
const botao = document.querySelector('.botao');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    const valorUser = parseInt(valor.value);

    if (isNaN(valorUser)) {
        resultado.innerText = 'Por favor, insira um número válido.';
        return;
    }

    if (valorUser % 2 != 0) {
        resultado.innerText = `Esse valor é ímpar`;
    } else {
        resultado.innerText = `Esse valor é par`;
    }
});