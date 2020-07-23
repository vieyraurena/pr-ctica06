let numCaracter = 5;
let num = 123;


function alinearDerecha(num, numCaracter){
  let convertir = num.toString();
  let longitudNum = convertir.length;
  for (let index = 0; index <= numCaracter; index++){
    //numCaracter = '';
    preResultado = numCaracter - longitudNum;  
  }
  
  return  preResultado += convertir;
}

let result = alinearDerecha(num, numCaracter);
console.log(result);