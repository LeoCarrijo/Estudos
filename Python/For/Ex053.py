frase = str(input('Digite uma Frase: ')).strip().lower().replace(' ', '')
esarf = frase[::-1]
print(f'{frase}\n{esarf}')
if frase == esarf:
    print('A frase é um palíndromo')
else:
    print('A frase não é um palíndromo')