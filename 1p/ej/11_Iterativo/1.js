
    let num = [];
    let n = 10000;
    let contador = 0;

    for (let i = 0; i < n; i++) {

        num[i] = Math.floor(Math.random()*(n-1) +1);
        
    }

      let inicio = new Date();
      
      for (let i = 0; i < num.length; i++) {
		for (let j = 0; j < num.length; j++) {
			if (num[j] > num[j + 1]) {
				let temp = num[j];
				num[j] = num[j + 1];
                num[j + 1] = temp;

                contador = contador+1;
			}
		}
    }

    let fin = new Date();

    for (let i = 0; i < n; i++) {
        console.log(num[i]); 
    }

    let tiempo = fin-inicio;

    console.log("La cantidad de inversiones necesarias fueron: " +contador+ " inversiones");
    console.log("El tiempo que se tardo en ordenarlo fue de: " +tiempo/1000+ " segundos");

//¿podemos mejorar el tiempo de ejecución? si, en este algoritmo si se quita la impresion de los numeros ordenados la muestra de tiempos e inversiones seria mas rapida
// En promedio necesita de 25028767 inversiones
// El tiempo promedio es de 0.459 segundos 

