termo = int(input('Digite o primeiro termo da PA: '))
razao = int(input('Digite a razão da PA: '))
for i in range(0, 10):
    print(f' {termo}', end=' ->')
    termo += razao
print(' Acabou!')