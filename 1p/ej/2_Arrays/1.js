//1, 3, 5, ...

var numeros = [];
numeros[0] = 1;

for(var i = 0; i<10; i++){

    console.log(numeros[i]);
    numeros[i+1] = numeros[i]+2;

}