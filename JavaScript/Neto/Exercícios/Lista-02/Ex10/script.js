function Calcular(){
    let resDiv = document.querySelector('div#res')
    let cnt1 = document.querySelector('input#cnt1').value
    let cnt2 = document.querySelector('input#cnt2').value

    if(cnt1.trim() !== '' && cnt2.trim() !== ''){
        cnt1 = Number(cnt1) * 1.02       
        cnt2 = Number(cnt2) * 1.02        
        resDiv.innerHTML = `Conta 1: ${cnt1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Conta 2: ${cnt2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}