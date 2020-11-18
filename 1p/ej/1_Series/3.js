//fibonacci

var n1 = 0, n2 = 1, n3;

for(var i = 1; i <= 10; i++){

    n3=n1;
    n1=n2+n1;
    n2=n3;

    console.log(n2);

}