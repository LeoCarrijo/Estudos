function Calcular(){
    let nota1 = Number(document.querySelector('input#nota1').value)
    let nota2 = Number(document.querySelector('input#nota2').value)
    let divRes = document.querySelector('div#res')
    divRes.innerHTML = ''
    let media = (nota1 + nota2) / 2
    let msg

    if(media == 10){
        msg = 'aprovado com distinção'
    }else if(media >= 7){
        msg = 'aprovado'
    }else{
        msg = 'reprovado'
    }

    divRes.innerHTML = `Média: ${media}<br><br>Aluno foi ${msg}.`
}