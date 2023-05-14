function Calcular(){
    let divRes = document.querySelector('div#res')
    let valores = []
    divRes.innerHTML = ''

    for(let i = 0; i < 3; i++){
        valores.push(Number(document.querySelector(`input#val${i+1}`).value))
    }
    valores.sort((a, b) => b - a);
    
    divRes.innerHTML = `1º Valor: ${valores[0]}<br><br>2º Valor: ${valores[1]}<br><br>3º Valor: ${valores[2]}`
}