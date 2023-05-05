const input = require('prompt-sync')({sigint: true})

let tab = input('Digite um valor: ')
let cont

do{
    console.log(`\nTabuada do ${tab}`)
    cont = 1
    do{
        console.log(`${tab} x ${cont} = ${tab * cont}`)
        cont++
    }while(cont <= 10)
    tab++
}while(tab <= 10)

let min = 1, max = 10
tab = Math.floor(Math.random() * (min + max) + min)
cont = 1

while(tab <= 10){
    console.log(`\nTabuada do ${tab}`)
    cont = 1
    while(cont <= 10){
        console.log(`${tab} x ${cont} = ${tab * cont}`)
        cont++
    }
    tab++
}