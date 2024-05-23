let vei, dis, tem, veM;
vei = prompt("Informe o modelo de seu veículo:");
dis = parseFloat(prompt(`Informe qual a distância percorrida por ele?`));
tem = parseFloat(prompt(`Informe em quanto tempo ele percorreu esta distância:`));
veM = dis/tem;

alert(`O modelo de seu veículo é ${vei}, ele percorreu ${dis}Km neste tempo: ${tem}. Sua velocidade média foi de ${veM.toFixed(2)}Km/h.`);
