/**
 * Contagem regressiva de forma iterativa e recursiva
 * @param {*} n Número inteiro a ser contado de forma regressiva
 * @returns Imprime a contagem regressiva 2x (iterativa e recursiva)
 */ 
const argv = process.argv;
let n = argv[2];


// Verifica se o argumento é um inteiro válido maior que zero
if (isNaN(n)) {
    console.error('Erro: O argumento não é um número.');
  } else if (n <= 0) {
    console.error('Erro: O argumento deve ser maior que zero.');
  } else {
    // Caso o argumento seja válido, converte para número
    n = Number(argv[2]);
    // Verifica se o número é inteiro e arredonda caso não seja
    if (!Number.isInteger(n)) {
        n = Math.round(n);
        console.log(`Argumento válido arredondado: ${n}.`);
    }
    else {
        console.log(`Argumento válido: ${n}.`);
    }
    console.log(`Inciando contagem regressiva...`);
    console.log("Regressiva");
    countDown(n);
    console.log("Recursiva");
    recursiveCountdown(n);
  }

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

function recursiveCountdown(n) {
    console.log(n);
    if (n <= 0) {
        // caso base
        return;
    }
    else {
         // caso recursivo
         recursiveCountdown(n - 1);
    }
}