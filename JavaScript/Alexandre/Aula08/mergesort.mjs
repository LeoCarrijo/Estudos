function mergeSort(vetor){

    if(vetor.length < 2) return vetor // O(1)

    let meio = Math.floor(vetor.length / 2) // O(1)*2

    let vetEsq = vetor.slice(0, meio) // O(1)*2
    let vetDir = vetor.slice(meio) // O(1)*2
    
    vetEsq = mergeSort(vetEsq) // O(log n)
    vetDir = mergeSort(vetDir) // O(log n)

    
    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){ // O(n)
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    }else{
        sobra = vetDir.slice(posDir)
    }
    
    return [ ...vetRes, ...sobra ]
}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

// let numsOrd = mergeSort(nums)

// console.log({numsOrd})

import { nomes } from "../Data/nomes-desord.mjs"

let nomesOrd = mergeSort(nomes)
console.log(nomesOrd)