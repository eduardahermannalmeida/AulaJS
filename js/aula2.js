let val, pag, lit;

val = parseFloat(prompt("Informe o valor do litro da gasolina:"));
pag = parseFloat(prompt("Qual o valor em reais deseja abastecer?"))
lit = pag/val;

if(pag>0){
    alert(`Você conseguirá abastecer ${lit.toFixed(1)}L de gasolina com ${pag} reais`);
} else{
    alert(`Não é possível abastecer...`)
}

