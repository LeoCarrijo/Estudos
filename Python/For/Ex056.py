class Pessoa:
    def __init__(self, nome, idade, sexo):
        self.nome = nome
        self.idade = idade
        self.sexo = sexo
    pass

pessoas = []
media = 0
nome = ''
maior = 0
soma = 0

for i in range(0, 5):
    print(f'----- {i + 1}º Pessoa -----')
    pessoa = Pessoa(input('Digite seu Nome: '), int(input('Digite sua Idade: ')), input('M ou F?: ').strip().lower())
    pessoas.append(pessoa)
    media += pessoas[i].idade
    if pessoas[i].idade > maior and pessoas[i].sexo == 'm':
        maior = pessoas[i].idade
        nome = pessoas[i].nome
    if pessoas[i].idade < 20 and pessoas[i].sexo == 'f':
        soma += 1

print(pessoas[2])
media /= len(pessoas)
print(f'\n--Média das Idades: {int(media)}\n--Nome e Idade do Homem Mais velho: "{nome}" com {maior} anos\n--Quantidade de Mulheres com menos de 20 anos: {soma} mulher(es)')