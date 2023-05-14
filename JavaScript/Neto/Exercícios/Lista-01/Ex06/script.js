function Calcular(){
    let sal = Number(document.querySelector('input#sal').value)
    let divRes = document.querySelector('div#res')
    let aumento
    divRes.innerHTML = ''

    if(sal <= 280){
        aumento = 0.20
    }else if(sal < 700){
        aumento = 0.15
    }else if(sal < 1500){
        aumento = 0.10
    }else{
        aumento = 0.05
    }

    divRes.innerHTML = `Salário Base: ${sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br><br>Percentual do Aumento: ${aumento * 100}%<br><br>Valor do Aumento: ${(sal * aumento).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br><br>Novo Salário: ${(sal + (sal * aumento)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}