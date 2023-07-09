from datetime import date

soma = 0
for i in range(0, 7):
    ano = int(input('Qual seu ano de Nascimento: '))
    if date.today().year - ano >= 21:
        soma += 1
if soma == 0:
    print('Todos ainda são menores de idade')
elif soma == 1:
    print('Apenas uma pessoa é de maior')
else:
    print(f'{soma} pessoas são de maior')
    print(f'{7 - soma} pessoas ainda são de menor')