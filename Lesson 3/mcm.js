console.log(mcm(36, 48));

function mcd(a, b) {
    if (a < b) {
        const temp = a;
        a = b;
        b = temp;
    }

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function mcm(a, b) {
    return a / mcd(a, b) * b;
}

