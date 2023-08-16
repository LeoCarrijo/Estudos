// VALORES
const raio = 5.4, pi = Math.PI
const nome = 'Leonardo', concatenar = 'Olá'
const valores = [7, 8, 9, 10, 11]

var frase, area

// OBJETOS
const resposta = document.querySelector('section.resposta')
const divResposta = document.createElement('div')

// PROCESSAMENTO
resposta.appendChild(divResposta)

area = pi * raio * raio
frase = `${concatenar}, ${nome}!`

// SAIDA
divResposta.innerHTML += area.toFixed(2) + '<br>'
divResposta.innerHTML += frase + '<br>'