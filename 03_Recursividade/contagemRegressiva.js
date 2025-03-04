function contagemRegressiva(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

function contagemRegressivaRecursiva(n) {
    console.log(n);
    if (n <= 0) {
        // caso base
        return;
    }
    else {
         // caso recursivo
        contagemRegressivaRecursiva(n - 1);
    }
}
console.log("Regressiva");
contagemRegressiva(10);
console.log("Recursiva");
contagemRegressivaRecursiva(10);