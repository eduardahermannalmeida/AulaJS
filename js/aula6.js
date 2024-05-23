function exibir(){
    alert("Seja bem-vindo!");
}
function saudar(nome){
    alert("Boa tarde, "+nome);
}
function somar(n1, n2){
    alert("A soma de "+n1+" + "+n2+" é igual a "+(n1+n2));
}
function mostrarMaior(n1, n2){
    if(n1 > n2){
        alert("O maior é: "+n1);
    }else if(n2 > n1){
        alert("O maior é: "+n2);
    }else{
        alert("Ambos são iguais");
    }
}
exibir();
var nome, n1, n2;
nome = prompt("Qual o nome?");
saudar(nome);
n1 = parseFloat(prompt("1º Número:"));
n2 = parseFloat(prompt("2º Número:"));
somar(n1, n2);
mostrarMaior(n1, n2);