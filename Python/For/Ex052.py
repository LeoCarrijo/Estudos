n = int(input('Digite um Número: '))
soma = 0
for i in range (1, n + 1):
    if n % i == 0:
        print(f'\033[33m', end='')
        soma += 1
    else:
        print(f'\033[31m', end='')
    print(i ,end=' ')
print(f'\033[m')
print(f'\nO número {n} foi divisível {soma} vezes')
if soma == 2:
    print('E por isso ele É PRIMO')
else:
    print('E por isso ele NÃO É PRIMO')