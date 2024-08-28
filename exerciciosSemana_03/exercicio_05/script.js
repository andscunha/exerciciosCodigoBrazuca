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
    const valorUser = parseInt(valor.value)

    resultado.innerHTML = ''

    for(let i = 1; i <= 10; i++){
        printa(`${valorUser} x ${i} = ${valorUser * i}`)
    }
})
