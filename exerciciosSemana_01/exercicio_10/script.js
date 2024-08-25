const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', () => {
    let contador = 0

    for(let i = 1; i <= 5; i++){
        let numero = parseInt(prompt(`Digite o ${i}º número:`))

        if(numero > 0){
            contador++
        }
    }

    resultado.innerText = `Você digitou ${contador} números positivos.`
})
