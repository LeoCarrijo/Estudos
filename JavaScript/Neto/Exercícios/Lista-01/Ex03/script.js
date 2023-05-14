function Calcular(){
    let val = Number(document.querySelector('input#val').value)
    let divRes = document.querySelector('div#res')
    divRes.innerHTML = ''

    if(val.length == 0 || val < 0){
        alert('Valor inválido!')
    }else{
        if(val % 2 == 1){
            divRes.innerHTML = `O número é <strong>ímpar</strong>`
        }else{
            divRes.innerHTML = `O número é <strong>par</strong>`
        }
    }
}