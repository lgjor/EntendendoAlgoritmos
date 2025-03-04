 /**
 * Calculo de fatorial de forma recursiva
 * @param {*} n Número inteiro fatorado
 * @returns Imprime o fatorial
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
    console.log(`Inciando cálculo fatorial...`);
    console.log(`O fatorial de ${n} é ${fact(n)}`);
  }

function fact(n) {
    if ( n === 1)  {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}