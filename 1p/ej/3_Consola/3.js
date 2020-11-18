//factorial

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el número que deseas obtener su fatorial: ', function (n) {

    var f = 1;

    for(var i = 1; i <= n; i++){
    
        f = f*i;
    
        console.log(f);
    
    }

  rl.close();
});