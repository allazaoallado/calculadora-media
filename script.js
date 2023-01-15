function media(){
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

  resultado.innerHTML = `Sua média é: ${soma.toFixed(1).replace('.',',')}`
  nota_1.style.borderColor = "#d3d3d3"
  nota_2.style.borderColor = "#d3d3d3"
  nota_3.style.borderColor = "#d3d3d3"
  nota_4.style.borderColor = "#d3d3d3"

  if(isNaN(soma)){
    window.alert('Preecha os campos corretamente!!')
    nota_1.style.borderColor = "#FF0F0F"
    nota_2.style.borderColor = "#FF0F0F"
    nota_3.style.borderColor = "#FF0F0F"
    nota_4.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
  }else if(Number(nota_1.value) == 0 & Number(nota_2.value) == 0 & Number(nota_3.value) == 0 & Number(nota_4.value) == 0){
    window.alert("Preencha os campos!!")
    nota_1.style.borderColor = "#FF0F0F"
    nota_2.style.borderColor = "#FF0F0F"
    nota_3.style.borderColor = "#FF0F0F"
    nota_4.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
  }else if(isNaN(Number(nota_1.value).replace(',','.'))){
    nota_1.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
  }else if(Number(nota_1.value).replace(',','.') < 0 || Number(nota_1.value).replace(',','.') > 10){
    nota_1.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
    window.alert('1 nota invalida')
  }else if(Number(nota_2.value).replace(',','.') < 0 || Number(nota_2.value).replace(',','.') > 10 || isNaN(Number(nota_2.value))){
    nota_2.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
    window.alert('2 nota invalida')
  }else if(Number(nota_3.value).replace(',','.') < 0 || Number(nota_3.value).replace(',','.') > 10 || isNaN(Number(nota_3.value))){
    nota_3.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
    window.alert('3 nota invalida')
  }else if(Number(nota_4.value).replace(',','.') < 0 || Number(nota_4.value).replace(',','.') > 10 || isNaN(Number(nota_4.value))){
    nota_4.style.borderColor = "#FF0F0F"
    resultado.innerHTML =  'Sua média é:'
    window.alert('4 nota invalida')
  }
}



function limpar(){
let nota_1 = window.document
  .getElementById('nota1')
let nota_2 = window.document
  .getElementById('nota2')
let nota_3 = window.document
  .getElementById('nota3')
let nota_4 = window.document
.getElementById('nota4')
let resultado = window.document.getElementById('resultado')
resultado.innerHTML = 'Sua média é:'
nota_1.style.borderColor = "#d3d3d3"
nota_2.style.borderColor = "#d3d3d3"
nota_3.style.borderColor = "#d3d3d3"
nota_4.style.borderColor = "#d3d3d3"
}
