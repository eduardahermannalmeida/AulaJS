let idade, ia, ib, ja, jb, a, resultado;
idade = parseFloat(prompt(`Olá nadador! Informe a sua idade:`));
ia = "Infantil A.";
ib = "Infantil B.";
ja = "Juvenil A.";
jb = "Juvenil B.";
a = "Adulto."
resultado = "Você está classificado na categoria: ";

if(idade >= 5 && idade <= 7){
    alert(${resultado} ${ia});
} else if(idade >= 8 && idade <= 10){
    alert(${resultado} ${ib});
} else if(idade >= 11 && idade <= 13){
    alert(${resultado} ${ja});
} else if(idade >= 14 && idade <= 17){
    alert(${resultado} ${jb});
} else if(idade >= 18){
    alert(${resultado} ${a});
} else {
    alert(`Não é possível classificá-lo...`)
}
