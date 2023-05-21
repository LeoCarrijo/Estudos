var i = 1
let resDiv = document.querySelector('div#res')
let dadosDiv = document.querySelector('div#dados')
let label = document.querySelector(`label#lblPes`)
let valores = []
let inf = 0, adu = 0, ido = 0

function Calcular(){
    if(i < 11){
        let idade = document.querySelector(`input#pes${i}`)
        i++
        if(idade.value.trim() !== ''){
            valores.push(Number(idade.value))
            label.innerHTML = `Pessoa ${i}:`
            idade.id = `pes${i}`
        }else{
            resDiv.innerHTML = 'Digite um Valor!'
        }
    }else{
        document.querySelector('input#botao').remove()
        document.querySelector(`input#pes${i}`).remove()
        document.querySelector('label#lblPes').remove()
        document.querySelector('hr#linha').remove()
        for(let i = 0; i < valores.length; i++){
            if(valores[i] < 18){
                inf++
            }else if(valores[i] < 60){
                adu++
            }else{
                ido++
            }
        }
        resDiv.innerHTML = `Crianças: ${inf}<br><br>Adultos: ${adu}<br><br>Idosos: ${ido}`
    }
}