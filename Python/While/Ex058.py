import random, emoji, os
n = random.randint(1, 10)
palpite = 0
tentativas = 1

print('-=-=-=-=-=-=-=-')
print(emoji.emojize('Vamos Jogar um \033[34mjogo?\033[m :video_game:'))
print('-=-=-=-=-=-=-=-')
print('Vou pensar em um núemro entre \033[33m1\033[m e \033[33m10\033[m\nTente adivinhar o número que pensei...')
palpite = int(input(f'{tentativas}º Tentativa: '))
while palpite != n:
    os.system('cls')
    print(emoji.emojize(':smiling_face_with_tear:  Putz... não era esse...'))
    print(f'O número é \033[34mmenor\033[m que \033[33m{palpite}\033[m' if n < palpite else f'O número é \033[34mmaior\033[m que \033[33m{palpite}\033[m')
    tentativas += 1
    palpite = int(input(f'{tentativas}º Tentativa: '))
os.system('cls')
print(emoji.emojize('\033[33m:party_popper: PARABÉNS :party_popper:\033[m'))
print(f'Você levou \033[31m{tentativas} \033[mtentativa(s) para acertar')