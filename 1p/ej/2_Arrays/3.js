//fibonacci

var n1 = 0, n2 = 1, n3;
var x = []

for(var i = 1; i <= 10; i++){

    n3=n1;
    n1=n2+n1;
    n2=n3;

    x[i]=n2
    console.log(x[i]);


}