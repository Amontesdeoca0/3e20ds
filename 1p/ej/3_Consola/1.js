//aleatorios (min=1, max=n)

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la cantidad de números que deseas generar: ', function (n) {

  for(var i = 1; i <= n; i++){

    var r = Math.random()*(n-1) +1;

    console.log(r);

}

  rl.close();
});