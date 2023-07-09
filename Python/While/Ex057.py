from os import system as sys

sexo = str(input('Digite seu sexo (M/F): ')).lower()
while sexo not in 'mf':
    sys('cls')
    sexo = str(input('Valor Inválido!\nTente Novamente: '))