//max(S)

var s = [3,1,4,2,3]
var max = s[0];

for(var i = 0; i < s.length; i++){				

    if (s[i] > max) {
        max = s[i];
    }
	
}

console.log("El numero mayor es: " +max);