import { nomes } from '../Data/vetor-nomes.mjs'

const frutas = ['laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão']
const valorBuscado = 'uva'

function Buscar(valorBuscado, vetor){
    for(i = 0; i < frutas.length; i++){
        if(vetor[i] === valorBuscado){
            return i
        }
    }
    return -1
}

// let indice = Buscar(valorBuscado, frutas)
// console.log(`O valor "${valorBuscado}" está na posição ${indice}`)

console.time('Buscando Leonardo...')
console.log(`Posição de "LEONARDO": ${Buscar('LEONARDO', nomes)}`)
console.timeEnd()