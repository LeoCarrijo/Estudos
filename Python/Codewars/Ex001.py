import textwrap

def VerificarBin(n):
    while len(n) < 32:
        n.insert(0, '0')
    return n

ipv4 = '192.168.1.100'
octetos = list(map(lambda n: list(bin(int(n))[2:]), ipv4.split('.')))
octetos = list(map(lambda n: ''.join(VerificarBin(n)), octetos))
int32teste = int(''.join(octetos), 2)
# print(int32teste)

ipTeste = 386083393

def int32_to_ip(int32):
    if int32 == '0': return '0.0.0.0'
    octetos = textwrap.wrap(VerificarBin(bin(int32)[2:]), 8)
    print(f'1º: {octetos}')
    octetos = list(map(lambda n: str(int(n, 2)), octetos))
    print(f'2º: {octetos}')
    return '.'.join(octetos)

print(int32_to_ip(ipTeste))