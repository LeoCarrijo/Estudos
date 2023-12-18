texto = "nuncá utilizem calcinha & canhão"

codigos = {
    '&amp;': '&',
    '&aacute;': 'á', 
    '&atilde;': 'ã',
    '&teste': '�'
}

for char in texto:
    if char in codigos.values:
        print('achei')