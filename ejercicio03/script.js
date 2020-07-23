const input = parseInt(prompt('Ingrese un número para comprobar sí es un número primo'));

function esPrimo (input){
  let numPrimo = true;
  for (i = 2; i < input; i++){
    if (input % i == 0 ){
      numPrimo = false;
    }
  }
  if(numPrimo){
    return true;
  } else {
    return false;
  }
}

let result = esPrimo(input);
console.log(`¿Es número primo? ${result}`);