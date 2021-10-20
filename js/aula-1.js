

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<br>Obrigado por clicar</br>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://gangorra.github.io/Meu-Site-3/");
    window.location.href = "https://gangorra.github.io/Meu-Site-3/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //para substituir o texto ao passar o mouse
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
}

function load(){
    alert("Pagina carregada!");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaidade(idade){
    var validar;
    if(idade >= 18){
    validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));
*/

/*
var d = new Date ();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count ++){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count); - estrutura de repetição (count)
    count ++;
}
*/

/*
var idade = prompt("Qual sua idade?"); - caixa de dialogo (pergunta)
if (idade => 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop(); - retirar elemento!

//console.log(lista);
//console.log(lista.toString()); - criar uma representação em string do objeto que o chama.
//console.log(lista.join(" - ")); - junta todos os elementos e define um separador!



//var nome = "Felipe Gangorra";
//var idade = 21;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos!");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil")); - substituir um caracteristica!
//console.log(frase.toUpperCase()); - deixa a frase em maiusculo!
//console.log(frase.toLowerCase()); - deixa a frase em minusculo!
