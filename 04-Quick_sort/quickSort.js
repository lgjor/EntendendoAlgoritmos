/**
 * --------------------Quick Sort----------------------------------
 * 
 * QuickSortPivot0 - Primeiro elemento como pivô
 * QuickSort - Melhor caso: Mediana como pivô pelo método partition
 * QuickSortRandomPivot - Pivô aleatório
 * 
 * ----------------------------------------------------------------
 */

const array     = [3, 5, 2, 9, 4, 1, 6, 8, 7];
const array2    = [3, 5, 2, 9, 4, 1, 6, 8, 7];
const array3    = [3, 5, 2, 9, 4, 1, 6, 8, 7];
const array4    = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Pior caso: Primeiro elemento como pivot - O(n^2)
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

// Melhor caso: Mediana como pivot - O(n log n)
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

function quickSortRandomPivot(array) {
    if (array.length <= 1) {
        return array; // caso base: array vazio ou com um elemento
    }
    // Escolha aleatória do pivô
    let pivot_index = Math.floor(Math.random() * array.length);
    let pivot = array[pivot_index];
    let less = [];
    let greater = [];

    // Particionamento dos elementos em relação ao pivô
    for (let index = 0; index < array.length; index += 1) {
        if (index !== pivot_index) {
            if (array[index] < pivot) {
                less.push(array[index]);
            } else {
                greater.push(array[index]);
            }
        }
    }
    return [...quickSortRandomPivot(less), pivot, ...quickSortRandomPivot(greater)];
}

console.log(`Primeiro elemento como pivô (Pior caso): ${quickSortPivot0(array)}`);

// First call quickSort with initial parameters
quickSort(0, array2.length - 1);

//Then display the sorted array
console.log(`Pivô determinado pelo método partition: ${array2}`);

console.log(`Pivô aleatório: ${quickSortRandomPivot(array3)}`);