//Ln (1+x) = x - x^2/2 + x^3/3 - ... +

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la cantidad de números que deseas generar: ', function (n) {

  var num = 1;
  var div = 0;

  for(var i = 0; i <= n; i++){

    div += num/i;

  }

  console.log(div);

  rl.close();
});