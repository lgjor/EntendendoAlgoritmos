export function buscaMenorIndex(arr) {
    let menor = arr[0];
    let menorIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
            menorIndex = i;
        }
    }
    // console.log(menorIndex);
    return menorIndex;
}
//buscaMenor(arr);