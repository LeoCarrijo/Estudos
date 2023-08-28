lista1 = [10, 16, 24, 39, 47]
lista2 = [32, 89, 47, 76, 12]
soma = 0

# for lista in [lista1, lista2]:
#     for num in lista:
#         if num % 2 == 0:
#             soma += num

for num in lista1 + lista2:
    if num % 2 == 0:
        soma += num

print(f'A soma dos números pares das duas listas é igual à {soma}')