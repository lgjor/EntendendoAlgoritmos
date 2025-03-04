const altura = 1680;
const largura = 640;

function MaximumSquareDivider(altura, largura) {
    if ( largura > altura ) {
        largura = largura -  altura;
        return MaximumSquareDivider (altura, largura);
    }
    else if ( altura > largura ) {
        altura = altura - largura;
        return MaximumSquareDivider (altura, largura);
    }
    else {
        return `Larger square to evenly divide the area: ${altura} x ${largura}`;
    }
}

console.log(MaximumSquareDivider(altura, largura));