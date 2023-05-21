function Calcular(){
    let resDiv = document.querySelector('div#res')
    let perc = document.querySelector('input#perc').value
    let sal = document.querySelector('input#sal').value

    if(sal.trim() !== '' && perc.trim() !== ''){
        sal = Number(sal)
        perc = Number(perc / 100)
        let novoSal = Aumento(sal, perc)
        resDiv.innerHTML = `Salário antigo: ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Novo Salário: ${novoSal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}

function Aumento(sal, perc){
    return sal * (1 + perc)
}