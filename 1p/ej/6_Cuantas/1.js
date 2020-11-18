//En una fiesta hay n invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?

var apretones = factorial(10)/(factorial(10-2)*factorial(2))

console.log(apretones);

function factorial (n) {
    var total = 1; 
    
	for (i=n; i>0; i--) {
		total = total * i; 
    }
    
	return total; 
}