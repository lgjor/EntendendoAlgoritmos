function contagemRegressiva(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

function contagemRegressivaRecursiva(n) {
    console.log(n);
    if (n <= 0) {
        return;
    }
    else {
        contagemRegressivaRecursiva(n - 1);
    }
}
console.log("Regressiva");
contagemRegressiva(10);
console.log("Recursiva");
contagemRegressivaRecursiva(10);