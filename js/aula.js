let nota1, nota2;

nome = prompt("Digite o seu nome");
nota1 =  parseFloat(prompt("Digite sua primeira nota"));
nota2 =  parseFloat(prompt("Digite sua segunda nota"));
media = (nota1 + nota2) / 2;

if (media >= 7) {
    resposta = "aprovado(a)";
} else {
    resposta = "reprovado(a)";
}

alert(`${nome}, sua média do aluno é ${media.toFixed(1)}, você está ${resposta}.`);
