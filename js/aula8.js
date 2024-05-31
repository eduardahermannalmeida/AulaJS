
function aprovarAluno(media, diasAula, diasFalta) {
    let resultado;
    let totalDias = diasAula - diasFalta;

    if (media >= 7 && totalDias >= (0.75 * diasAula)) {
        resultado = "O aluno foi aprovado!";
    } else {
        resultado = "O aluno foi reprovado.";
    }

    return resultado;

}

function mostrarResultado(disciplina, quantDias, quantFalt, valMedi) {
    const res = document.getElementById('resultado');
    let frequencia = quantDias - quantFalt;
    frequencia = frequencia*100;
    frequencia = frequencia/quantDias;
    res.innerHTML = `Disciplina: ${disciplina} <br> 
    Frequência: ${frequencia.toFixed(2)}% <br>
    Média: ${valMedi} <br> ${aprovarAluno(valMedi, quantDias, quantFalt)}`;
}

function pegarValor() {
    const disc = document.getElementById('disciplina');
    const dias = document.getElementById('dias');
    const falt = document.getElementById('faltas');
    const medi = document.getElementById('media');
    mostrarResultado(disc.value, dias.value, falt.value, medi.value);
}

function limpar() {

    document.getElementById("disciplina").value = null;
    document.getElementById("dias").value = null;
    document.getElementById("faltas").value = null;
    document.getElementById("media").value = null;

}