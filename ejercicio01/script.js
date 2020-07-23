const num1 = parseInt(prompt('Ingrese un número'));
const num2 = parseInt(prompt('Ingrese otro número'));


function max (num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let result = max(num1, num2)
console.log(`El número mayor es ${result}`);