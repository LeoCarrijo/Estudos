function Calcular(){
    let resDiv = document.querySelector('div#res')
    let sal = document.querySelector('input#sal').value

    if(sal.trim() !== ''){
        sal = Number(sal)
        let novoSal = Aumento(sal, 0.25)
        resDiv.innerHTML = `Salário antigo: ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Novo Salário: ${novoSal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}

function Aumento(sal, perc){
    return sal * (1 + perc)
}