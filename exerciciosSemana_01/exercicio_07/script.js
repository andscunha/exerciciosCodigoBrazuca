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

for(let i = 10; i >= 0; i--){
    printa(`${i}`)
}

printa('Contagem regressiva completa!')