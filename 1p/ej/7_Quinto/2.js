//lucas

lucas=[1,3];
var limite=5;

secLucas(2);

console.log(lucas)

function secLucas(n){
    
    if (n<=limite) {
        
        lucas[n]=lucas[n-1]+lucas[n-2];
        secLucas(n+1);

    }
}