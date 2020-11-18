//har = 1 + 1/2 + ... + //suma harmónica

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el número que deseas obtener su fatorial: ', function (n) {

  function harmonica(){

    var valor = 1;
    var sucesion = [];
  
    for(var i = 0; i <= n; i++){
  
      sucesion[i] = valor/i;
  
    }
  
    console.log("El quiento número de la sucesion es: " +sucesion[5]);
  
  }
  harmonica();

  rl.close();
});

