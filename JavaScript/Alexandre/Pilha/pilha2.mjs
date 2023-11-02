import Stack from './Stack.mjs'

let pilha = new Stack();

console.log(pilha.print())
console.log(pilha.isEmpty)

pilha.push(10)
pilha.push(11)
pilha.push(12)
pilha.push(13)
pilha.push(14)
pilha.pop()
pilha.pop()

console.log(pilha.print())
console.log(pilha.isEmpty)
console.log(pilha.peek())