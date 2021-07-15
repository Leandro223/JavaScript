function soma(n1, n2){
    return n1 + n2;
}
alert(soma(10, 9));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil")); 

function validarIdade (idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validarIdade(idade));