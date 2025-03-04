const array = [3, 5, 2, 9, 4, 1, 6, 8, 7];
const array2 = [3, 5, 2, 9, 4, 1, 6, 8, 7];

// Pior caso: O(n^2)
function quickSortPivot0(array){
    // base case, empty or one element arrays are already sorted
    if (array.length <= 1){
        return array;
    }
    
    // recursive case
    // pivot as the first element
    let pivot = array[0];
    let less = [];
    let greater = [];
    
    for (let index =1; index < array.length; index+=1){
        if (array[index] < pivot) {
            less.push(array[index]);
        } else {
            greater.push(array[index]);
        }
    }
    return [...quickSortPivot0(less),pivot,...quickSortPivot0(greater)];
}

function partition(inicio, fim){
    let ref = array2[inicio];
    let down = inicio;
    let up = fim;
    let temp;

    // Encontrando um número maior que o pivô (ref)
    while (down < up){
        while (array2[down] <= ref && down < fim){
            down++; // avanço porque quero encontrar um valor maior
        }
        // Encontrando a partir do fim, um valor menor que o de referência
        while (array2[up] > ref){
            up--;
        }
        if (down < up){ // não se cruzaram nos índices
            // troca
            temp        = array2[down];
            array2[down] = array2[up];
            array2[up]   = temp;
        }
    }
    array2[inicio]   = array2[up];
    array2[up]       = ref;
    return          up; // retorna a posição do pivô
}

// Melhor caso ou caso médio: O(n log n)
function quickSort(inicio, fim){
    let pivot;
    if (inicio >= fim){  // This stops recursion when partition is 1 or empty
        return;
    }
    pivot = partition(inicio, fim);
    quickSort(inicio, pivot - 1);
    quickSort(pivot + 1, fim);
}

console.log(`Primeiro elemento como pivô (Pior caso): ${quickSortPivot0(array)}`);

// First call quickSort with initial parameters
quickSort(0, array.length - 1);

// Then display the sorted array
console.log(`Pivô determinado pelo método partition: ${array2}`);