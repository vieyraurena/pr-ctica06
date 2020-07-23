const num1 = parseInt(prompt('Escriba un Número'));
const num2 = parseInt(prompt('Escriba un Número'));

function divisible (num1, num2){
  if (num1 % num2 == 0) {
    return true;
  } else {
    return false;
  }
}

let result = divisible(num1, num2);
console.log(`¿los números que ingresaste son divisibles entre ellos? ${result}`);