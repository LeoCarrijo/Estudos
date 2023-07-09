import os

n = int(input('Digite um número para calcular seu fatorial: '))
cont = n
os.system('cls')
print(f'{n}! = ', end='')
while cont != 1:
    cont -= 1
    print(f'{n} x {cont} = \033[31m{n*cont}\033[m', end='  ->  ')
    n *= cont
print('Fim')