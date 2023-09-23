import { nomes } from "../Data/nomes-desord.mjs"

let pass = 0, comparacoes = 0, trocas = 0

function SelectionSort(vetor){
    for(let posSel = 0; posSel < vetor.length; posSel++){
        pass++
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
                comparacoes++
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            trocas++
        }
    }
}

let numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

SelectionSort(numeros)
console.log(numeros)
console.log(`Passadas: ${pass}\nComparações: ${comparacoes}\nTrocas: ${trocas}`)

console.time('...')
SelectionSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('...')
console.log(nomes)
console.log(`Passadas: ${pass}\nComparações: ${comparacoes}\nTrocas: ${trocas}\nMemória Usada: ${memoriaMB}`)