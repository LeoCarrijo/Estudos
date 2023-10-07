import { objMotoristas } from "../Data/motoristas-obj-desord.mjs"

function mergeSort(vetor, fnComp){
    if(vetor.length < 2) return vetor
æ
    let meio = Math.floor(vetor.length / 2)
    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)

    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(fnComp(vetEsq[posEsq], vetDir[posDir])){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra

    if((posEsq < posDir)){
        sobra = vetEsq.slice(posEsq)
    }else{
        sobra = vetDir.slice(posDir)
    }
    return [ ...vetRes, ...sobra ]
}

let nomeObjOrdenado = mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)
console.log(nomeObjOrdenado)