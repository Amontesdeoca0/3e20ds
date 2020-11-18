//aleatorios (min=1, max=10)

var x = []

for(var i = 1; i <= 10; i++){

    x[i] = Math.floor(Math.random()*(10-1) +1);

    console.log(x[i]);

}