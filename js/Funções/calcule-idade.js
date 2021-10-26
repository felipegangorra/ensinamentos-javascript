//CALCULANDO IDADE
//entendendo call, apply, array e objetos.

// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!


function calculeIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 26,
};

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug",
};

console.log(calculeIdade.call(animal, 7));