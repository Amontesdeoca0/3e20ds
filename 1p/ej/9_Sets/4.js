//tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6

function print(){
    
    /*let nombres = [];
    let randomNombres = new Set();
    let n = 10e4;
    let inicio = new Date();

    for (let i = 1; i < n+1; i++) {
        
        nombres[i-1] = 'Nombre'+i;
        
    }

        for(let i = n-2; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = t;
            randomNombres.add(nombres[i]);

        }       

    console.log(randomNombres);
    var fin = new Date();

    var tiempo = fin.getTime() - inicio.getTime();

    console.log("Tiempo de ejecución: " + tiempo/1000 + " Segundos");*/

    /*let nombres = [];
    let randomNombres = new Set();
    let n = 10e5;
    let inicio = new Date();

    for (let i = 1; i < n+1; i++) {
        
        nombres[i-1] = 'Nombre'+i;
        
    }

        for(let i = n-2; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = t;
            randomNombres.add(nombres[i]);

        }       

    console.log(randomNombres);
    var fin = new Date();

    var tiempo = fin.getTime() - inicio.getTime();

    console.log("Tiempo de ejecución: " + tiempo/1000 + " Segundos");*/

    let nombres = [];
    let randomNombres = new Set();
    let n = 10e6;
    let inicio = new Date();

    for (let i = 1; i < n+1; i++) {
        
        nombres[i-1] = 'Nombre'+i;
        
    }

        for(let i = n-2; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = t;
            randomNombres.add(nombres[i]);

        }       

    console.log(randomNombres);
    var fin = new Date();

    var tiempo = fin.getTime() - inicio.getTime();

    console.log("Tiempo de ejecución: " + tiempo/1000 + " Segundos");

  }
  
  print();