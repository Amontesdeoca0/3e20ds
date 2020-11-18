//De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?

var alfabeto = 8;
var letras = 8;

var palabras = Math.pow(alfabeto,letras);

console.log("La cantidad de palabras que se pueden generar son: " + palabras);
