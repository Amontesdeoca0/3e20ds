//qué dia fue hace 11 dias?

var calc = 11 % 7;
var dia = calc + 1;

if (dia == 1) {
    console.log("Si hoy es lunes hace 11 dias fue: Lunes");
}else if( dia == 2){
    console.log("Si hoy es lunes hace 11 dias fue: Domingo");
}else if( dia == 3){
    console.log("Si hoy es lunes hace 11 dias fue: Sábado");
}else if( dia == 4){
    console.log("Si hoy es lunes hace 11 dias fue: Viernes");
}else if( dia == 5){
    console.log("Si hoy es lunes hace 11 dias fue: Jueves");
}else if( dia == 6){
    console.log("Si hoy es lunes hace 11 dias fue: Miércoles");
}else if( dia == 7){
    console.log("Si hoy es lunes hace 11 dias fue: Martes"); 
}