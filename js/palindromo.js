//INVERTENDO UMA FRASE PALÍNDROMA

//solução 1
function verificaPalindromo(string) {
    if(!string) return "string inxexistente";       //se não existe (!) retorna

    return string.split("").reverse().join("") === string    //separar-reverter-juntar
}

//console.log(verificaPalindromo("ovo"));



//solução 2
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {           // '/ 2' pois ele faz a contagem de inicio e de fim ao mesmo tempo
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

//console.log(verificaPalindromo2("abba"));