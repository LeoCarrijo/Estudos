function Calcular(){
    let valores = []
    let divRes = document.querySelector('div#res')
    divRes.innerHTML = ''

    for(let i = 0; i < 3; i++){
        valores.push(Number(document.querySelector(`input#pro${i+1}`).value))
    }
    valores.sort((a, b) => a - b)
    
    divRes.innerHTML = `Levando em consideração que o menor preço deve ser o escolhido<br><br>Então você deve comprar o produto com o valor de ${valores[0].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}