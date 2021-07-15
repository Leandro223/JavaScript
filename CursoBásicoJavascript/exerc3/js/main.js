//Condicionais, laços de repetição e Date
var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

//laço de repetição
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
    //count++   //mesma coisa
}

//for
var contador;
for(contador=0; contador <= 5; contador++){
    console.log(contador);
}

//date
var d = new Date();
console.log(d); //toda data
console.log(d.getMonth()); //mes
console.log(d.getDay()); //dia
console.log(d.getMinutes()); //minutos
console.log(d.getHours()); //horas



