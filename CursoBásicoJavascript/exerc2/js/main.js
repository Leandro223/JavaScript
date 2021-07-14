
//array
var lista = ["laranja", "pera", "maça"];
lista.push("uva");
console.log(lista[1]);
console.log(lista);
alert(lista[1]);

console.log(lista);
console.log(lista.length);
console.log(lista.reverse());

//deixa de ser Array vira string
console.log(lista.toString());
 //imprimi a 1 letra da string
console.log(lista.toString()[0]);

 //adiciona
console.log(lista.join(" | "));


//dicionario
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);

//lista de dicionarios
var frutas = [{nome:"banana", cor:"amarela"}, {nome:"limão", cor:"verde"}];
console.log(frutas[1].nome);
console.log(frutas[1].cor);
console.log(frutas[0].nome);
console.log(frutas[0].cor);

