import Deque from "./deck.mjs"

// lista de Compras

let listaCompras = new Deque()
console.log(listaCompras.print())
console.log(listaCompras.isEmpty)

// Alimentício => início
listaCompras.insertFront('Arroz')
listaCompras.insertFront('Feijão')
listaCompras.insertFront('Macarrão')

console.log(listaCompras.print())

// Higiene e Limpeza => final
listaCompras.insertBack('Sabão em Pó')
listaCompras.insertBack('Desodorante')
listaCompras.insertBack('Água Sanitária')

console.log(listaCompras.print())

listaCompras.insertFront('Café')
listaCompras.insertFront('Açucar')

listaCompras.insertBack('Shampoo')
console.log(listaCompras.print())

let removido = listaCompras.removeBack()
console.log({removido})
console.log(listaCompras.print())

let proximo = listaCompras.peekFront()
console.log(proximo)
console.log(listaCompras.print())

let ultimo = listaCompras.peekBack()
console.log(ultimo)
console.log(listaCompras.print())