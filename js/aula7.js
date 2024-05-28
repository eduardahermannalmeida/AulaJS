function converterDolar(valor) {
    let dolar = valor*5.16;
    return dolar;
}

function mostrarResultado(valor){
    document.write(`O valor convertido para dólar é 
    ${converterDolar(valor)}`)
}