var i = 1, notas = []

function Calcular(){
    let lblNota = document.querySelector('label#lblNota')
    let resDiv = document.querySelector('div#res')
    let estrelas = ''

    if(i < 11){
        var nota = document.querySelector(`input#nota${i}`)
        i++
        if(nota.value.trim() !== '' && nota.value >= 0){
            notas.push(Number(nota.value))
        }
        for(let j = 0; j < notas[i-2]; j++){
            estrelas += '*'
        }
        resDiv.innerHTML += `Nota ${i-1}: ${estrelas}<br>`
        if(i != 11){
            lblNota.textContent = `Nota ${i}:`
            nota.id = `nota${i}`
        }else{
            document.querySelector('label#lblNota').remove()
            document.querySelector('input#nota10').remove()
            document.querySelector('hr#linha').remove()
            document.querySelector('input#botao').remove()
        }
    }
}