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

let indice = Buscar(valorBuscado, frutas)
console.log(`O valor "${valorBuscado}" está na posição ${indice}`)