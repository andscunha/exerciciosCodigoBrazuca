const resultado = document.querySelector('.resultado')
const inicio = parseInt(prompt("Digite o início do intervalo:"));
const fim = parseInt(prompt("Digite o fim do intervalo:"));

let primos = "";

for (let numero = inicio; numero <= fim; numero++) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        primos += numero + " ";
    }
}

resultado.innerText = `Números primos entre ${inicio} e ${fim}: ${primos.trim()}`;
