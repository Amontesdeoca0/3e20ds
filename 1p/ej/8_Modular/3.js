//qué dia será en 11 dias?

var calc = 11 % 7;
var dia = calc + 1;

if (dia == 1) {
    console.log("Si hoy es lunes en 11 dias será: Lunes");
}else if( dia == 2){
    console.log("Si hoy es lunes en 11 dias será: Martes");
}else if( dia == 3){
    console.log("Si hoy es lunes en 11 dias será: Miércoles");
}else if( dia == 4){
    console.log("Si hoy es lunes en 11 dias será: Jueves");
}else if( dia == 5){
    console.log("Si hoy es lunes en 11 dias será: Viernes");
}else if( dia == 6){
    console.log("Si hoy es lunes en 11 dias será: Sábado");
}else if( dia == 7){
    console.log("Si hoy es lunes en 11 dias será: Domingo"); 
}
