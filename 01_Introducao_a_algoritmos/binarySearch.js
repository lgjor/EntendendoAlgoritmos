export function binarySearch(lista, item){
    let meio =0;
    let baixo = 0;
    let alto = lista.length - 1;
    while(baixo <= alto){
        // Math.floor arredonda para baixo e math.ceil arredonda para cima, ambos os arredondamentos são válidos.
        meio = Math.ceil((baixo+alto)/2);
        let chute = lista[meio];
        if(chute === item){
            return meio;
        }
        else if (item < chute){
            alto = meio -1;
        }
        else{
            baixo = meio + 1;
        }
    }
}
