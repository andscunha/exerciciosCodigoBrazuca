const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

const parOuImpar = (stringVazia) => {
    resultado.innerText = stringVazia
}

botao.addEventListener('click', function(){

    if (valor.value % 2 == 0){
        parOuImpar('O número é par')
    }else{
        parOuImpar('O número é impar')
    }
})