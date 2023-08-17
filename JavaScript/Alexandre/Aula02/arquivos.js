var opcao = 0

while(opcao != 1) {
    opcao = GerarInteiro(150)
    console.log(`Opção Escolhida foi ${opcao}`)
}
console.log('Fim')

function Aprovar(nota) {
    if(nota >= 6) {
        console.log(`Aprovado com nota ${nota}`)
    } else {
        console.log(`Reprovado com nota ${nota}`)
    }
}

function GerarInteiro(num) {
    const valor = Math.random() * num
    return Math.floor(valor)
}