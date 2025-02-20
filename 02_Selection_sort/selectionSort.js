import { buscaMenorIndex } from './buscaMenorIndex.js';
let arr=[5,3,6,2,10];
let menor = [0];
let menorIndex = 0;
console.log(`Array original: ${arr}`);
function selectionSort(arr){
    let novoArr=[];
    const arrLength = arr.length; // determina o tamanho do array

    for (let i=0; i<arrLength; i++){
       menor = buscaMenorIndex(arr); // Busca o menor valor do array
       novoArr.push(arr[menor]); // Adiciona o menor valor do array ao novo array
       arr.splice(menor,1); // Remove o menor valor do array original
       // console.log(`Novo Arr = ${novoArr}`);
       // console.log(`Arr = ${arr}`);
    }
    console.log(`Array ordenado: ${novoArr}`);
    return novoArr;
}
selectionSort(arr);