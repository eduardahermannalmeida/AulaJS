let nome, nota1, nota2, media, resposta;
nome = prompt("Digite seu nome");
nota1 = parseFloat(prompt("Digite a primeira nota"));
nota2 = parseFloat(prompt("Digite a segunda nota"));
media = (nota1 + nota2) / 2;
if (media >= 7) {
    resposta = "o aluno passou!";
} else {
    resposta = "aluno tirou nota baixa, reprovou e dançou";
}
alert(`${nome}, sua média do aluno é ${media.toFixed(1)}, ${resposta}`);