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