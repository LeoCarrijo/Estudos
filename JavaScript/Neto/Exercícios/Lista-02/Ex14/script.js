function Calcular(){
    let notas = [], soma = 0, media = 0, res = ''
    let nome = document.querySelector('input#nome')
    let nota1 = document.querySelector('input#nota1')
    let nota2 = document.querySelector('input#nota2')
    let nota3 = document.querySelector('input#nota3')
    let nota4 = document.querySelector('input#nota4')
    let resDiv = document.querySelector('div#res')
    
    if(nome.value.trim() != '' && nota1.value.trim() != '' && nota2.value.trim() != '' && nota3.value.trim() != '' && nota4.value.trim() != ''){
        nome = nome.value
        notas =[Number(nota1.value), Number(nota2.value), Number(nota3.value), Number(nota4.value)]
        for(let i = 0; i < notas.length; i++){
            soma += notas[i]
        }
        media = soma / notas.length
        if(media >= 7){
            res = 'Aprovado!'
        }else{
            res = 'Reprovado!'
        }
        resDiv.innerHTML = `Nome do Aluno: ${nome}<br>Nota 1: ${notas[0]}<br>Nota 2: ${notas[1]}<br>Nota 3: ${notas[2]}<br>Nota 4: ${notas[3]}<br>Média ${media.toFixed(2)}<br>${res}`
    }else{
        alert('Insira os valores!')
    }
}