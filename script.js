
function media() {
    var nota_1 = window.document.getElementById('nota1')
    var nota_2 = window.document.getElementById('nota2')
    var nota_3 = window.document.getElementById('nota3')

    var nota1 = Number(nota_1.value.replace(',', '.'))
    var nota2 = Number(nota_2.value.replace(',', '.'))
    var nota3 = Number(nota_3.value.replace(',', '.'))
    var resposta = window.document.getElementById('resposta')
    var soma = (nota1 + nota2 + nota3) / 3

    resposta.innerHTML = `A sua média é <strong>${soma.toFixed(2).replace('.', ',')}</strong>`
}


