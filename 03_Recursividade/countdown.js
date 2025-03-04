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
        contagemRegressivaRecursiva(n - 1);
    }
}
console.log("Regressiva");
countDown(10);
console.log("Recursiva");
recursiveCountdown(10);