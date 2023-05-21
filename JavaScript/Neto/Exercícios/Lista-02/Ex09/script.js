function Calcular(){
    let resDiv = document.querySelector('div#res')
    let fab = document.querySelector('input#fab').value
    let dis = document.querySelector('input#dis').value
    let imp = document.querySelector('input#imp').value

    if(fab.trim() !== '' && dis.trim() !== '' && imp.trim() !== ''){
        fab = Number(fab)
        dis = fab * Number(dis / 100)
        imp = fab * Number(imp / 100)
        resDiv.innerHTML = `Valor do Distribuidor: ${dis.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Impostos: ${imp.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Valor Final do Veículo: ${(fab + dis + imp).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }else{
        resDiv.innerHTML = 'Digite um valor!'
    }
}