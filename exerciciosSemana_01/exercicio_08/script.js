const valor = document.querySelector('.valor')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', () =>{
    const ano = parseInt(valor.value)

    
    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                resultado.innerText = 'O ano é bissexto'
            }else{
                resultado.innerText = 'O ano não é bissexto'
            }
        }else{
            resultado.innerText = 'O ano é bissexto'
        }
    }else{
        resultado.innerText = 'O ano não é bissexto'
    }
})