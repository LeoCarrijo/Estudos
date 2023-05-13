function Calcular(){
    let x = Number(document.querySelector('input#val1').value)
    let y = Number(document.querySelector('input#val2').value)
    let divRes = document.querySelector('div#res')
    let maior, menor, iguais = false

    divRes.innerHTML = ''

    if(x.length == 0 || y.length == 0){
        alert('Dados inválidos!')
    }else{
        if(x > y){
            maior = x
            menor = y
        }else if(y > x){
            maior = y
            menor = x
        }else{
            iguais = true
        }

        divRes.innerHTML = `O primeiro valor foi ${x}<br><br>O segundo valor foi ${y}<br><br>`
        if(!iguais){
            divRes.innerHTML += `O maior deles é o ${maior}<br><br>E o menor é o ${menor}`
        }else{
            divRes.innerHTML += `Logo, os valores são iguais`
        }
    }

    
}