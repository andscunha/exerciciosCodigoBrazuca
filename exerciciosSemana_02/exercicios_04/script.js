const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', ()=>{
    const valorUser = parseInt(valor.value)

    if(valorUser > 30){
        resultado.innerText = `A temperatura está quente!`
    }else if(valorUser < 15){
        resultado.innerText = `A temperatura está fria!`
    }else if(valorUser >= 15){
        resultado.innerText = `A temperatura está agradável!`
    }
})