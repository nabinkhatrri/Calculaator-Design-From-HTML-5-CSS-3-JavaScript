let num1=8
let num2=2

document.getElementById('num1-el').textContent=num1
document.getElementById('num2-el').textContent=num2
let sumEl=document.getElementById('sum-el')

function addition(){
  let result=num1+num2
  sumEl.textContent="Addition :"+ result
}
function subtraction(){
  let result=num1-num2
  sumEl.textContent='Subtraction :'+ result
}
function multiplication(){
  let result=num1*num2
  sumEl.textContent='Multiplication :'+ result
}
function division(){
  let result=num1/num2
  sumEl.textContent='Division : '+result
}
function modulus(){
  let result=num1%num2
  sumEl.textContent='Modulus :' +result
}