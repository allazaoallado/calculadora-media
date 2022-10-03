function somar() {
 var nota_1 = window.document
  .getElementById('nota1')
 var nota_2 = window.document
  .getElementById('nota2')
 var nota_3 = window.document
  .getElementById('nota3')
 var soma = (Number(nota_1.value) +
   Number(nota_2.value) + Number(nota_3.value)
   ) / 3

 var resposta = window.document
  .getElementById('resposta')

if(nota_1.value < 0 || nota_1.value > 10 || isNaN(nota_1.value)){window.alert('A nota inserida no 1° trimestre é inválida')
resposta.innerHTML = ''
}else if(nota_2.value < 0 || nota_2.value > 10 || isNaN(nota_2.value)){
window.alert('A nota inserida no 2° trimestre é inválida')
resposta.innerHTML = ''
}else if(nota_3.value < 0 || nota_3.value > 10 || isNaN(nota_3.value)){
window.alert('A nota inserida no 3° trimestre é inválida')
resposta.innerHTML = ''
}else{
resposta.innerHTML = `A sua média é ${soma.toFixed(1).replace('.',',')}`
}



 
 
}


