const valor = document.querySelector('.valor');
const botao = document.querySelector('.botao');
const resultado = document.querySelector('.resultado');
const adicionar = document.querySelector('.adicionar');
let vetor = [];

adicionar.addEventListener('click', () => {
    let valorUser = valor.value; 
    vetor.push(valorUser); 
    valor.value = '';
});

botao.addEventListener('click', () => {
    resultado.innerText = vetor.join(', ');
});
