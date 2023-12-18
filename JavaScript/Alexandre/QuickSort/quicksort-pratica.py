lista = [4, 7, 2, 6, 4, 1, 8, 3]

def quicksort(lista, inicio = 0, fim = None):
    if fim is None:
        fim = len(lista) - 1
    if inicio < fim:
        pivot = partition(lista, inicio, fim)
        quicksort(lista, inicio, pivot-1)
        quicksort(lista, pivot+1, fim)

def partition(lista, inicio, fim):
    pivot = lista[fim]
    i = inicio
    for j in range(inicio, fim):
        if lista[j] <= pivot:
            lista[j], lista[i] = lista[i], lista[j]
            i = i + 1
    lista[i], lista[fim] = lista[fim], lista[i]
    return i