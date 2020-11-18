//min(S)

var s = [3,1,4,2,3]
var min = s[0];

for(var i = 0; i < s.length; i++){				

    if (s[i] < min) {
        min = s[i];
    }
	
}

console.log("El numero menor es: " +min);