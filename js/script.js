function mainFunction (exponentiation) {
  let num1 = +prompt('введите первое число');
  let num2 = +prompt('введите второе число');
  return exponentiation(num1, num2);
  return multiply(num1,num2);
  return division(num1,num2);
  return module(num1,num2);
}

function exponentiation(num1, num2) {
  return Math.pow(num1,num2);
}
function multiply(num1,num2) {
  return num1 * num2;
}

function division(num1,num2) {
  return num1 / num2
}

function module(num1,num2) {
  return num1 % num2
}
alert(mainFunction(exponentiation));
//alert(mainFunction (multiply));
//alert(mainFunction (division));
//alert(mainFunction (module));