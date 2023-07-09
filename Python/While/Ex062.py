from os import system as sys

n = int(input('Primeiro Termo: '))
razao = int(input('Razão da PA: '))
sys('cls')
cont = 0; total = 0; termos = 1

while termos != 0:
    while cont < 10:
        total = n + (cont * razao)
        print(f'{total}', end=' -> ')
        cont += 1
    termos = int(input('\nQuantos mais termos você quer ver? '))
    limite = cont + termos
    while cont < limite:
        total = n + (cont * razao)
        print(f'{total}', end=' -> ')
        cont += 1
sys('cls')
print('Fim')