from os import system as sys

n = s = 0
while True:
    n = int(input('Digite um Número: '))
    if n == 999:
        break
    s += n
print(f'A soma vale {s}')
