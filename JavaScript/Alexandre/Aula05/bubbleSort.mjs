let comparacoes = 0, trocas = 0, pass = 0

function OrdenarBubble(vetor){
    let swap
    do{
        pass++
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            comparacoes++
            if(vetor[i] > vetor[i + 1]){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                swap = true
            }
        }
    }while(swap)
}

let numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

OrdenarBubble(numeros)
console.log(numeros)
console.log(`Comparações: ${comparacoes}, Trocas: ${trocas}`)