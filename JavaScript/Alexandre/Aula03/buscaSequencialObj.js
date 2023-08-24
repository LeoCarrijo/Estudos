import { objNomes } from "../Data/vetor-obj-nomes.mjs";

let nome = 'LEONARDO'

function BuscarObjeto(fnComp, vetor){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])){
            return i
        }
    }
}

function CompararNome(obj){
    return obj.first_name === nome
}

console.log(`Posição de LEONARDO: ${BuscarObjeto(CompararNome, objNomes)}`)