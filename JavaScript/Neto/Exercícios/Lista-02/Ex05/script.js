function Calcular(){
    let resDiv = document.querySelector('div#res')
    let lado = document.querySelector('input#lado').value

    if(lado.trim() !== ''){
        lado = Number(lado)
        let area = Math.pow(lado, 2)
        resDiv.innerHTML = `Área do Quadrado: ${area}cm`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}