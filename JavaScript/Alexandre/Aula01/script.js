var cadastro = {
    nome: "Leozin do Grau",
    idade: 20,
    peso: 65.50,
    empregado: true
}
var saida = document.querySelector('div.output')

function Cadastrar() {
    var nome = document.querySelector('input#nome').value
    var output = document.querySelector('div#output')
    cadastro.nome = nome
    output.innerHTML = cadastro.nome
}


// Comentar Linhas Automaticamente: Crtl + ;

var peso1 = 1.0
var peso2 = Number('2.0')

console.log(peso1 + peso2)

const prova1 = 9.734
const prova2 = 5.987

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

saida.innerHTML = media