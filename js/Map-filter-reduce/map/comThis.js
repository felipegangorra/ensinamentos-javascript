// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
//COM THIS

const orange = {
    price: 2,                   //price = preço = valor
};

const apple = {
    price: 1.5,
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function (item) {
        return item * this.price;
    }, apple);
}

console.log(mapArray());