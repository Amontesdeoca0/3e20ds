//potencia x elevado a la k

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa hasta que numero quieres obtener la potencia: ', function (n) {

    for(var i = 1; i <= n; i++){

        for(var j = 1; j <= 10; j++){
    
            potencia = Math.pow(i, j);
    
            console.log(potencia);
    
        }
    
    }

  rl.close();
});