function Calcular(){
    let resDiv = document.querySelector('div#res')
    let x = document.querySelector('input#num1').value
    let y = document.querySelector('input#num2').value
    let z = document.querySelector('input#num3').value

    if(x.trim() !== '' && y.trim() !== '' && z.trim() !== ''){
        x = Number(x)
        y = Number(y)
        z = Number(z)
        let media = Media(x, y, z)
        resDiv.innerHTML = `A Média dos elementos é igual à ${media}`
    }else{
        resDiv.innerHTML = 'Digite os valores!'
    }

    function Media(x, y, z){
        return ((x + y + z) / 3).toFixed(2)
    }
}