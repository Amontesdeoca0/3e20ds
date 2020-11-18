//De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?, r<=n

var alfabeto = 5;
var letras = 8;

var palabras = Math.pow(alfabeto,letras);

console.log("La cantidad de palabras que se pueden generar son: " + palabras);
