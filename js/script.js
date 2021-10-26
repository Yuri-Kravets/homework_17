function mainFunction (exponentiation) {
  let num1 = +prompt('введите первое число');
  let num2 = +prompt('введите второе число');
  return exponentiation(num1, num2);
  return multiply(num1,num2);
  return division(num1,num2);
  return module (num1,num2);
}

function exponentiation(num1, num2) {
  let getDegree = Math.pow(num1,num2);
    alert(getDegree);  
}
function multiply(num1,num2) {
  let mult = (num1 * num2);
  alert (mult);
}

function division(num1,num2) {
  let div = (num1 / num2);
  alert (div);
}
function module(num1,num2) {
  let mod = (num1 % num2);
  alert (mod);
}
mainFunction (exponentiation);
mainFunction (multiply);
mainFunction (division);
mainFunction (module);