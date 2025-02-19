export function linearSearch(lista, item){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === item) {
            return i;
        }
    }
    return null;
}