import { objMotoristas } from "../Data/motoristas-obj-desord.mjs"

let pass = 0, comparacoes = 0, trocas = 0

function selectionSort(vetor, fnComp){
    for(let posSel = 0; posSel < vetor.length; posSel++){
        pass++
        let posMenor = posSel + 1
        for(let i = posMenor; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
                comparacoes++
            }
        }
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            trocas++
        }
    }
}

console.time('...')
selectionSort(objMotoristas, (obj1, obj2) => obj1.nome_motorista > obj2.nome_motorista)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('...')
console.log(objMotoristas)
console.log(`Passadas: ${pass}\nComparações: ${comparacoes}\nTrocas: ${trocas}\nMemória Usada: ${memoriaMB}`)