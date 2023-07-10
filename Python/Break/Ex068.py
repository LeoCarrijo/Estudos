from os import system as sys
from emoji import emojize
from random import randint

pessoa = cpu = vitorias = opt = res = 0

print('-=-=-=-=-=-=-=-=-=-=-=-=-')
print(emojize(':robot: - Vamos jogar um \033[35mjogo\033[m? :video_game:'))
print('-=-=-=-=-=-=-=-=-=-=-=-=-')
print('Vamos agora jogar \033[33mpar um ímpar\033[m...')
while True:
    opt = str(input('Você quer \033[33mpar (P)\033[m ou \033[33mímpar (I)\033[m? ')).strip().lower()[0]
    sys('cls')
    cpu = randint(0, 10)
    pessoa = int(input(emojize(':robot: - Escolhi um número...\nQual você escolhe? ')))
    res = (cpu + pessoa) % 2
    print(f'Eu escolhi {cpu}, e você escolheu ', end='')
    print('\033[33mpar\033[m' if opt == 'p' else '\033[33mímpar\033[m')
    if (res == 0 and opt == 'p') or (res == 1 and opt == 'i'):
        vitorias += 1
        print('\033[33mVocê Ganhou!\033[m')
    else:
        break
print(f'Eu Ganhei!')
print('\033[31mGame Over!\033[m')
print(f'Você ganhou \033[32m{vitorias}\033[m vezes seguidas!')
