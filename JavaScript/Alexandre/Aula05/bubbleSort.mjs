import { objMotoristas } from '../Data/motoristas-obj-desord.mjs'

let comparacoes = 0, trocas = 0, pass = 0

function OrdenarBubble(vetor, fnComp){
    let swap
    do{
        pass++
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            comparacoes++
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                swap = true
            }
        }
    }while(swap)
}

let numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

OrdenarBubble(objMotoristas, (obj1, obj2) => obj1.nome_motorista > obj2.nome_motorista)
console.log(objMotoristas)