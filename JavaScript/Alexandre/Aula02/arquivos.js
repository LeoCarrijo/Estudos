var opcao = 0

while(opcao != 1) {
    opcao = GerarInteiro(15)
    console.log(`Opção Escolhida foi ${opcao}`)
}

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