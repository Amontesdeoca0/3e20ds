//-1, 3, -5, ...

var i = 1;
var x = []
x[0] = 1

do{

    x2 = -x;

    console.log(x);

    var num = Math.sign(x);
    
    if(num == 1){

        x[i]=x[i]+2;
        
    }else if (num == -1){

        x[i]=x[i]-2;

    }

    i++;

}while(i<=10)