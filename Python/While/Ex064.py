from os import system as sys

soma = 0; cont = 0
n = int(input('(Quando quiser parar digite 999)\nDigite um número:'))
while n != 999:
    cont += 1
    soma += n
    n = int(input(f'Digite o {cont}º número: '))
print(f'{cont} números foram digitados\ne o total foi de {soma}')