import Stack from "./Stack.mjs";

let frase = 'Socorram-me, subi no ônibus em marrocos'
let pilha = new Stack()

for(let i = 0; i < frase.length; i++){
    pilha.push(frase.charAt(i))
}
let reverso = ""

while(!pilha.isEmpty){
    reverso += pilha.pop()
}

console.log(reverso)