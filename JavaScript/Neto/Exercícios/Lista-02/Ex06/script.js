function Calcular(){
    let resDiv = document.querySelector('div#res')
    let alt = document.querySelector('input#alt').value
    let peso = document.querySelector('input#peso').value

    if(alt.trim() !== '' && peso.trim() !== ''){
        alt = Number(alt)
        peso = Number(peso)
        let imc = (peso / alt ** 2).toFixed(2)
        resDiv.innerHTML = `Seu IMC é de ${imc}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}