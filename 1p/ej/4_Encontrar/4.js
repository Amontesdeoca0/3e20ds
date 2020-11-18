//existenRepetidos(S)

var s = [3,1,4,2,3]
var igual = s[0];

for(var i = 0; i < s.length; i++){				

    if (s[i] == igual) {
        igual = s[i];
    }
	
}

console.log("El numero repetido es: " +igual);