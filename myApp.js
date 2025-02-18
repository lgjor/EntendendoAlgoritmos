import { pesquisaBinaria } from './pesquisaBinaria.js';
import readline from 'readline';
console.log(" ");
console.log("----------- Bem vindo ao MyApp! -----------");
console.log(" ");
console.log("Buscas disponíveis:");
console.log("1 - Busca Binária");
console.log(" ");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let minhaLista = [1,3,5,7,9];

rl.question('Qual o tipo de busca deseja realizar? ', (numero1) => {
    const numeroDaBusca = parseInt(numero1);
    if(numeroDaBusca === 1){
        console.log(" ");
        console.log("Busca Binária");
        console.log(" ");
        rl.question('Qual o item deseja buscar? ', (numero2) => {
            const numero = parseInt(numero2);
            console.log(pesquisaBinaria(minhaLista, numero));
            rl.close();
        });
    }
    else{
        console.log(" ");
        console.log("Opção inválida!");
        rl.close();
    };
});