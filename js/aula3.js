let time, time2, pontos1, pontos2, placar;
time1 = prompt("Digite o nome do 1º time:");
time2 = prompt("Digite o nome do 2º time:");
pontos1 = parseFloat(prompt(`Digite o placar de ${time1}:`));
pontos2 = parseFloat(prompt(`Digite o placar de ${time2}:`));
placar = (`O placar ficou: ${time1} ${pontos1} X ${pontos2} ${time2}.`);

if (pontos1 > pontos2) {
    alert(`${placar} O time ${time1} venceu!`);
} else if (pontos2 > pontos1) {
    alert(`${placar} O time ${time2} venceu!`);
} else {
    alert(`${placar} Os times ${time1} e ${time2} empataram...`);
}

