const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function recursiveArraySum(array, indice = 0) {
    // Caso base: se o índice for igual ao tamanho do array, a soma é 0
    if (indice === array.length) {
        return 0;
    }
    else{
        // Caso recursivo: soma o elemento atual com a soma dos elementos restantes
        return array[indice] + recursiveArraySum(array, indice + 1);
    }
}
console.log(`Soma utilizando loop for: ${arraySum(array)}`); // 55
console.log(`Soma utilizando recursão: ${recursiveArraySum(array)}`); // 55