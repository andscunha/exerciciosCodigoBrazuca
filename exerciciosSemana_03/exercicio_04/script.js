const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', ()=>{
    const valorUser = valor.value
    const ehPalindromo = (texto) => {
        const textoInvertido = texto.split('').reverse().join('');
        return texto === textoInvertido;
    }
    
    resultado.innerText = ehPalindromo(valorUser) ? "É um palíndromo!" : "Não é um palíndromo." 
})
