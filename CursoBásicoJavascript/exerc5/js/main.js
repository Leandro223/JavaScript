function botao(){
    alert("Obrigado por clicar");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://github.com/Leandro223");
    //window.location.href = "https://github.com/Leandro223"; //mesma aba
}

function trocar(){

    document.getElementById("mousemove").innerHTML = "Novo Texto";

}

function voltar(){

    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";

}

function load(){
    alert("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}