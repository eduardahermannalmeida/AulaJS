
function pegarValor() {
    const nomeProd = document.getElementById('nome');
    const reais = document.getElementById('real');
    mostrarResultado(nomeProd.value, reais.value);
}

function converterDolar(valor) {
    let dolar = valor / 5.16;
    return dolar;
}

function mostrarResultado(nome, valor) {
    const res = document.getElementById('resultado');
    res.textContent = `O valor do produto ${nome} em reais 
    é ${valor}, convertido para dólar é 
    $${converterDolar(valor).toFixed(2)}.`;
}

