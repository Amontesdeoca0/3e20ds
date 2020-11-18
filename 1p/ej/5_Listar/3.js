//combinaciones(S)

function combinar(n){

    var r = [];

    var  f = function(prefix, n){

        for(var i = 0; i < n.length; i++){

            r.push(prefix + n[i]);
            f(prefix + n[i], n.slice(i+1));

        }

    }

    f('', n);
    return r;

}

console.log(combinar([3,1,4,2,3]));