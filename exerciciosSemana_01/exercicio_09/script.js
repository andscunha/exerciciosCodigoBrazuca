const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

const criarP = () =>{
    const p = document.createElement('p')
    return p
}

const printa = (print) => {
    const p = criarP()
    p.innerText = print
    resultado.appendChild(p)
}

botao.addEventListener('click', () =>{
    const numero = parseInt(valor.value)
    let fatorial = 1

    resultado.innerHTML = ''

    for(let i = 1; i <= numero; i++){
        fatorial *= i
        printa(`O fatorial de ${numero} é: ${fatorial}`)
    }
})