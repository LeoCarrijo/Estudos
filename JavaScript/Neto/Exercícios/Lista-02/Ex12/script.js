var i = 1
let resDiv = document.querySelector('div#res')
let dadosDiv = document.querySelector('div#dados')
let label = document.querySelector(`label#lblPes`)
let labelCod = document.querySelector(`label#lblCod`)
let prazos = [], vistas = []
let vista = 0, prazo = 0, total = 0, vendasPrazo = 0

function Calcular(){
    if(i < 11){
        let pessoa = document.querySelector(`input#pes${i}`)
        let transacao = document.querySelector(`input#cod${i}`)
        i++
        if(pessoa.value.trim() !== '' && transacao.value.trim() !== ''){
            if(transacao.value.toLowerCase() == 'v'){
                vistas.push(Number(pessoa.value))
            }else{
                prazos.push(Number(pessoa.value))
            }
            label.innerHTML = `Pessoa ${i}:`
            labelCod.innerHTML = `Código da Transação ${i}:`
            pessoa.id = `pes${i}`
            transacao.id = `cod${i}`
        }else{
            resDiv.innerHTML = 'Digite um Valor!'
        }
    }else{
        document.querySelector('input#botao').remove()
        document.querySelector(`input#pes${i}`).remove()
        document.querySelector('label#lblPes').remove()
        document.querySelector('hr#linha').remove()
        document.querySelector(`input#cod${i}`).remove()
        document.querySelector('label#lblCod').remove()

        for(let i = 0; i < prazos.length; i++){
            prazo += prazos[i]
            vendasPrazo += prazos[i] / 3
            total += prazos[i]
        }
        for(let i = 0; i < vistas.length; i++){
            vista += vistas[i]
            total += vistas[i]
        }

        resDiv.innerHTML = `Total das vendas à vista: ${vista.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Total das vendas à prazo: ${prazo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>Total de todas as vendas: ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br><br>A soma de todas primeiras parcelas das vendas a prazo: ${vendasPrazo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
}