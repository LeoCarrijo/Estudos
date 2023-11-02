let frase = 'Socorram-me, subi no ônibus em marrocos'

let vetor = []

for(let i = 0; i < frase.length; i++){
    vetor.push(frase.charAt(i))
}

// vetor.unshift('X') // Coloca o elemento na posição 0 do array

// vetor.splice(11, 0, "W") // Insere o elemento na posição especificada (posicao, elementosAexcluir, elementoAIncluir)
console.log(vetor)

let reverso = ""

while(reverso.length > 0){
    reverso += vetor.pop()
}

console.log(reverso)