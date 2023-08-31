import {objNomes} from '../Data/vetor-obj-nomes.mjs'

function BuscarBinariamente(fnComp, vetor) {
    let inicio = 0, fim = vetor.length - 1
    while(fim >= inicio){
        let meio = Math.floor((inicio + fim) / 2)
        switch(fnComp(vetor[meio])){
            case 0: 
                return meio
            case 1:
                inicio = meio + 1
                break
            default:
                fim = meio - 1
        }
    }
    return -1
}

let nome = 'LEONARDO'
function Comparar(valorMeio, valorBuscado = nome){
    if(valorBuscado === valorMeio.first_name) return 0
    else if(valorBuscado > valorMeio.first_name) return 1
    else return -1
}

console.log(`A posição do first_name == ${nome}: ${BuscarBinariamente(Comparar, objNomes)}`)