//renglón del trianguloPascal()

var inicio; 

for(var i = 0; i < 5; i++){

    inicio = 1;

    for(var j = 0; j <= i; j++){

        console.log(inicio + " ");
        inicio = inicio*(i-j)/(j+1);

    }

    console.log("\n");

}