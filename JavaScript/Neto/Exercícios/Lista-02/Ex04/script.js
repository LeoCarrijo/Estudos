function Calcular(){
    let resDiv = document.querySelector('div#res')
    let sal = document.querySelector('input#sal').value
    let horas = document.querySelector('input#horas').value

    if(sal.trim() !== '' && horas.trim() !== ''){
        sal = Number(sal)
        horas = Number(horas)
        let total = sal * horas
        resDiv.innerHTML = `Salário: ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}