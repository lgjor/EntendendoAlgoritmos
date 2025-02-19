import { linearSearch } from './linearSearch.js';
import { binarySearch } from './binarySearch.js';
import readline from 'readline';
import { readFile } from 'fs/promises';

const data = JSON.parse(await readFile(new URL('./items.json', import.meta.url)));
const simple_list = data.simple_list;
let myList = [];

console.log(" ");
console.log("----------- Bem vindo ao MyApp! -----------");
console.log(" ");
console.log(`Listas disponíveis:`);
console.log(" ");
console.log(`1 - Lista com 5 itens`);
console.log(`2 - Lista com 10 itens`);
console.log(`3 - Lista com 100 itens`);
console.log(`4 - Lista com 1000 itens`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual lista deseja utilizar? ', (numeroDaLista) => {
    const listaEscolhida = parseInt(numeroDaLista);
    
    if(listaEscolhida === 1){
        myList = data.simple_list;
    }
    else if(listaEscolhida === 2){
        myList = data.list_with_10_items;
    }
    else if(listaEscolhida === 3){
        myList = data.list_with_100_items;
    }
    else if(listaEscolhida === 4){
        myList = data.list_with_1000_items;
    }
    else{
        console.log("Opção inválida!");
        rl.close();
        return;
    }
    
    console.log(" ");
    console.log("Buscas disponíveis:");
    console.log("1 - Busca Simples");
    console.log("2 - Busca Binária");
    console.log(" ");

    rl.question('Qual o tipo de busca deseja realizar? ', (numero1) => {
        const numeroDaBusca = parseInt(numero1);
        if(numeroDaBusca === 1){
            console.log(" ");
            console.log("Busca Simples");
            console.log(" ");
            rl.question('Qual o item deseja buscar? ', (numero2) => {
                const numero = parseInt(numero2);
                console.log(`Index do item buscado no array: ${linearSearch(myList, numero)}`);
                rl.close();
            });
        }
        else if(numeroDaBusca === 2){
            console.log(" ");
            console.log("Busca Binária");
            console.log(" ");
            rl.question('Qual o item deseja buscar? ', (numero2) => {
                const numero = parseInt(numero2);
                console.log(`Index do item buscado no array: ${binarySearch(myList, numero)}`);
                rl.close();
            });
        }
        else{
            console.log(" ");
            console.log("Opção inválida!");
            rl.close();
        }
    });
});