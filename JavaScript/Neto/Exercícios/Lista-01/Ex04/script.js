function Calcular(){
    let divRes = document.querySelector('div#res')
    let valores = []
    divRes.innerHTML = ''

    for(let i = 0; i < 3; i++){
        valores.push(Number(document.querySelector(`input#val${i+1}`).value))
    }
    valores.sort((a, b) => a - b);
    
    divRes.innerHTML = `O Maior valor foi o ${valores[2]}<br><br>O valor intermediário deles é o ${valores[1]}<br><br>E o menor valor deles é o ${valores[0]}`
}