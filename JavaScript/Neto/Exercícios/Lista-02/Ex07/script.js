function Calcular(){
    let resDiv = document.querySelector('div#res')
    let sal = document.querySelector('input#sal').value

    if(sal.trim() !== ''){
        sal = Number(sal)
        let imp = sal * 0.07
        let novoSal = sal * 1.05 - imp
        resDiv.innerHTML = `Salário Atual: ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Imposto: ${imp.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Novo Salário: ${novoSal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}