// function somar() {
//  let nota_1 = window.document
//   .getElementById('nota1')
//  let nota_2 = window.document
//   .getElementById('nota2')
//  let nota_3 = window.document
//   .getElementById('nota3')
//   let nota_4 = window.document
//   .getElementById('nota4')
//  let soma = (Number(nota_1.value.replace(',','.')) +
//    Number(nota_2.value.replace(',','.')) + Number(nota_3.value.replace(',','.'))
//     + Number(nota_4.value.replace(',','.')))
//    / 4

//  let resposta = window.document
//   .getElementById('resposta')

//   let agora = new Date()
//   let hora = agora.getHours()// para puxar o horário atual
//   let saudacao = ''
//   if(hora > 12 && hora < 18){
//   saudacao ='Boa tarde'
//   }else if(hora >= 18 || hora < 6){
//   saudacao ='Boa noite'
//   }else{
//   saudacao = 'Bom dia'
//   }

// if(nota_1.value < 0 || nota_1.value > 10 || isNaN(nota_1.value.replace(',','.'))){window.alert('A nota inserida no 1° trimestre é inválida')
// resposta.innerHTML = ''
// }else if(nota_2.value < 0 || nota_2.value > 10 || isNaN(nota_2.value.replace(',','.'))){
// window.alert('A nota inserida no 2° trimestre é inválida')
// resposta.innerHTML = ''
// }else if(nota_3.value < 0 || nota_3.value > 10 || isNaN(nota_3.value.replace(',','.'))){
// window.alert('A nota inserida no 3° trimestre é inválida')
// resposta.innerHTML = ''
// }else{
// resposta.innerHTML = `${saudacao}, sua média é ${soma.toFixed(1).replace('.',',')}.`
// }

// }

function somar(){
let nota_1 = window.document
  .getElementById('nota1')
let nota_2 = window.document
  .getElementById('nota2')
 let nota_3 = window.document
  .getElementById('nota3')
let nota_4 = window.document
  .getElementById('nota4')

 let soma = (Number(nota_1.value.replace(',','.')) +
   Number(nota_2.value.replace(',','.')) + Number(nota_3.value.replace(',','.'))
    + Number(nota_4.value.replace(',','.')))
   / 4

 
  
  let resultado = window.document
.getElementById('resultado')


resultado.innerHTML = `Sua media e: ${soma.toFixed(1).replace('.',',')}`

if(Number(nota_1.value) == 0 & Number(nota_2.value) == 0 & Number(nota_3.value) == 0 & Number(nota_4.value) == 0){
  window.alert("Preencha os campos!!")
  nota_1.style.borderColor = "#FF0F0F"
  nota_2.style.borderColor = "#FF0F0F"
  nota_3.style.borderColor = "#FF0F0F"
  nota_4.style.borderColor = "#FF0F0F"
  resultado.innerHTML =  'Sua media e:'
}else if(Number(nota_1.value) < 0 & Number(nota_1.value) <10){}

}

