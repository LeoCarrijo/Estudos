menor = 0
maior = 0
for i in range(0, 5):
    peso = float(input('Digite seu peso: '))
    if i == 0:
        menor = peso
        maior = peso
    else:
        if peso > maior:
            maior = peso
        elif peso < menor:
            menor = peso
print(f'Maior Peso: {maior}Kg\nMenor Peso: {menor}Kg')