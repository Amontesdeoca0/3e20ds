//-1, 3, -5, ...

var x = 1, i = 1;

do{

    x = -x;

    console.log(x);

    var num = Math.sign(x);
    
    if(num == 1){

        x=x+2;
        
    }else if (num == -1){

        x=x-2;

    }

    i++;

}while(i<=10)