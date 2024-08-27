const valor = document.querySelector('.valor');
const botao = document.querySelector('.botao');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    const valorUser = parseInt(valor.value);
    let fatorial = 1;

    for (let i = 1; i <= valorUser; i++) {
        fatorial *= i;
    }

    resultado.innerText = `Fatorial de ${valorUser} é ${fatorial}`;
});


