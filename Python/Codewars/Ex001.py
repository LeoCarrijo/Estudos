ipv4 = '192.168.1.100'
octetos = list(map(lambda n: int(bin(int(n))[2:]), ipv4.split('.')))
print(octetos)