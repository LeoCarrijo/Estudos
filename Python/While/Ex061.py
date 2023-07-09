from os import system as sys

n = int(input('Primeiro Termo: '))
razao = int(input('Razão da PA: '))
sys('cls')
cont = 0

while cont < 10:
    print(f'{n + (cont * razao)}', end=' -> ')
    cont += 1
print('Fim')