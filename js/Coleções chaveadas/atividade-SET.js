// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];              // "..." para criar uma array, caso contrário séria apenas um set e não um array.
}

console.log(valoresUnicos(meuArray));