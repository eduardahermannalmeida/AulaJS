function pegarMinus1() {
    const minus1 = document.getElementById('minusculo1');
    transMaius1(minus1.value);
}

function transMaius1(texMinus1) {
    const minus1Res = document.getElementById('maiusculo1');
    minus1Res.value = texMinus1.toUpperCase();
}

function pegarMaius2() {
    const maius2 = document.getElementById('maiusculo2');
    transMaius2(maius2.value);
}

function transMaius2(texMaius2) {
    const minus2Res = document.getElementById('minusculo2');
    minus2Res.value = texMaius2.toLowerCase();
}

function pegarPal1() {
    const pal1 = document.getElementById('palavra1');
    contaCaracter(pal1.value);

}

function contaCaracter(texPal) {
    const res = document.getElementById('resultado');
    res.innerHTML = `A palavra ${texPal} tem ${texPal.length} caracter(es)`;
}

function pegarPal2() {
    const pal2 = document.getElementById('palavra2');
    trocaA(pal2.value);
}

function trocaA(texPal2) {
    const pal2Res = document.getElementById('palavraComATrocado');
    pal2Res.value = texPal2.replace(/a|A/g, "*");

}

function pegarTex() {
    const tex = document.getElementById('texto');
    semEspaco(tex.value);

}

function semEspaco(texSeEs) {
    const texRes = document.getElementById('textoSemEspaco');
    texRes.value = texSeEs.replace(/\s/g, '');

}