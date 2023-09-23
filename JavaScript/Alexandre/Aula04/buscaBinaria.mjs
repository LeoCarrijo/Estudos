import {nomes} from '../Data/vetor-nomes.mjs'

function BuscarBinariamente(valorBuscado, vetor) {
    let inicio = 0, fim = vetor.length - 1
    while(fim >= inicio){
        let meio = Math.floor((inicio + fim) / 2)
        if(valorBuscado === vetor[meio]){
            return meio
        }else if(valorBuscado > vetor[meio]){
            inicio = meio + 1
        }else{
            fim = meio - 1
        }
    }
    return -1
}

let vetor = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

console.log(BuscarBinariamente(24, vetor))
console.log(`Posição de LEONARDO: ${BuscarBinariamente('LEONARDO', nomes)}`)