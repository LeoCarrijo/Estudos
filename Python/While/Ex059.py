import os

def Options():
    opt = int(input('''\nO que quer fazer com os números?
[1] Somar
[2] Multiplicar
[3] Maior
[4] Novos Números
[5] Sair do Programa
Opção: '''))
    os.system('cls')
    return opt

nums = [int(input('Digite o número 1: ')), int(input('Digite o número 2: '))]
opt = Options()

while opt != 5:
    if opt == 1:
        print(f'{nums[0]} + {nums[1]} = \033[33m{sum(nums)}\033[m')
        opt = Options()
    elif opt == 2:
        print(f'{nums[0]} x {nums[1]} = \033[33m{nums[0] * nums[1]}\033[m')
        opt = Options()
    elif opt == 3:
        print(f'\033[33m{max(nums)}\033[m é o maior número')
        opt = Options()
    elif opt == 4:
        nums = [int(input('Digite o número 1: ')), int(input('Digite o número 2: '))]
        opt = Options()
    else:
        print('Valor \033[31mInválido!\033[m')
print('\033[32mPrograma Finalizado!\033[m')

