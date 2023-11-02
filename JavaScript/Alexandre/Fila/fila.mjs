import Queue from "./Queue.mjs";

let fila = new Queue()

fila.enqueue('Leonardo')
fila.enqueue('Hugo')
fila.enqueue('Gabi')
fila.enqueue('Jalãh bypal')

console.log(fila.print())

let atendido = fila.dequeue()

console.log(atendido)
console.log(fila.print())
console.log(print)