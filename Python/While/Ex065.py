from os import system as sys

nums = []; opt = 's'; cont = 1

nums.append(int(input(f'Digite o {cont}º Número do conjunto: ')))
while opt == 's':
    cont += 1
    nums.append(int(input(f'Digite o {cont}º Número do conjunto: ')))
    sys('cls')
    opt = input('Quer Continuar? ').strip().lower()
print(f'A média dos número foi de {sum(nums) / len(nums)}')
print(f'O maior número digitado foi o {max(nums)} e menor foi o {min(nums)}')