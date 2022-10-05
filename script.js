function somar() {
 let nota_1 = window.document
  .getElementById('nota1')
 let nota_2 = window.document
  .getElementById('nota2')
 let nota_3 = window.document
  .getElementById('nota3')
 let soma = (Number(nota_1.value.replace(',','.')) +
   Number(nota_2.value.replace(',','.')) + Number(nota_3.value.replace(',','.'))
   ) / 3

 let resposta = window.document
  .getElementById('resposta')

  let agora = new Date()
  let hora = agora.getHours()// para puxar o horário atual
  let saudacao = ''
  if(hora > 12 && hora < 18){
  saudacao ='Boa tarde'
  }else if(hora >= 18 || hora < 6){
  saudacao ='Boa noite'
  }else{
  saudacao = 'Bom dia'
  }

if(nota_1.value < 0 || nota_1.value > 10 || isNaN(nota_1.value.replace(',','.'))){window.alert('A nota inserida no 1° trimestre é inválida')
resposta.innerHTML = ''
}else if(nota_2.value < 0 || nota_2.value > 10 || isNaN(nota_2.value.replace(',','.'))){
window.alert('A nota inserida no 2° trimestre é inválida')
resposta.innerHTML = ''
}else if(nota_3.value < 0 || nota_3.value > 10 || isNaN(nota_3.value.replace(',','.'))){
window.alert('A nota inserida no 3° trimestre é inválida')
resposta.innerHTML = ''
}else{
resposta.innerHTML = `${saudacao}, sua média é ${soma.toFixed(1).replace('.',',')}.`
}

}


