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

botao.addEventListener('click', ()=>{

    resultado.innerHTML = ''

    for(let i = 0; i <= 10; i++){
        printa(i++)
    }
})