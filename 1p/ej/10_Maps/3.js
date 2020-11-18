//agregar n nombres aleatorios

function print(){
    
    let nombres = [];
    let randomNombres = new Map();
    let n = 10e3;
    for (let i = 1; i < n+1; i++) {
        
        nombres[i-1] = 'Nombre'+i;
        
    }

        for(let i = n-2; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = t;
            randomNombres.set(nombres[i]);

        }       

    console.log(randomNombres);

  }
  
  print();