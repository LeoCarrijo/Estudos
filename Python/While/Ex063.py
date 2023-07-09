from os import system as sys

fib = [0, 1]
n = int(input('Quantos termos você quer ver? '))
sys('cls')
cont = 0
print('0 -> ', end='')
while cont < n - 1:
    fib.append(fib[cont] + fib[cont + 1])
    print(fib[cont + 1], end=' -> ')
    cont += 1
print('Fim')