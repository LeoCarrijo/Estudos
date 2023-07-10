from os import system as sys

n = cont = soma = 0
while True:
    n = int(input(f'(999 para encerrar)\nDigite o {cont + 1}º Número: '))
    sys('cls')
    if n == 999:
        break
    soma += n
    cont += 1
print(f'O soma dos {cont} valores vale {soma}')