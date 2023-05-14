function Calcular(){
    let val = Number(document.querySelector('input#val').value)
    let divRes = document.querySelector('div#res')
    divRes.innerHTML = ''

    if(val.length == 0){
        alert('Valores Inválidos')
    }else{
        if(val < 0){
            divRes.innerHTML = 'Número negativo'
        }else{
            divRes.innerHTML = 'Número positivo'
        }
    }
}