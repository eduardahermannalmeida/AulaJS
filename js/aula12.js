var arr = [];

function addItem() {
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoItem = document.getElementById('v').value;
    arr.push(novoItem);
    document.getElementById('v').value = " ";
    localStorage.meuArr = JSON.stringify(arr);

}

function showItems() {
    let resultDiv = document.getElementById('d');
    resultDiv.innerHTML = " ";
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    for (var i in arr) {
        let p = document.createElement('p');
        p.innerHTML = arr[i];
        resultDiv.append(p);

    }

}

function clearItems() {
    arr = [];
    localStorage.meuArr = JSON.stringify(arr);
}

function searchItem() {

    let itemProcurado = document.getElementById('sc').value;

    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

        if (arr.includes(itemProcurado.value)) {
            alert(`O item ${itemProcurado} está listado!`);
        } else {
            alert(`O item ${itemProcurado} não está listado!`);
        }

}

function removeAll() {

    if (confirm("Você tem certeza que deseja remover todos os itens listados?") == true) {
        arr = [];
        localStorage.meuArr = JSON.stringify(arr);

    } else {

    }

}