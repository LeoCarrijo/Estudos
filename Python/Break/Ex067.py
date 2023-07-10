from os import system as sys

n = 0

def Tabuada(val):
    for i in range(1, 11):
        print(f'{val} x {i} = {val * i}')

while True:
    print('-'*24)
    n = int(input('Quer ver a tabuada de qual valor? '))
    print('-'*24)
    sys('cls')
    if n < 0:
        break
    Tabuada(n)
print('Programa Finalizado')