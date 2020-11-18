//harmónico

function harmonica(){

    var valor = 1;
    var sucesion = [];
  
    for(var i = 0; i <= 10; i++){
  
      sucesion[i] = valor/i;
  
    }
  
    console.log("El quiento número de la sucesion es: " +sucesion[5]);
  
  }
  harmonica();