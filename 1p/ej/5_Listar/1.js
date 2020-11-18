//potencia(S)//powerSet

const Potencias = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

console.log(Potencias([3,1,4,2,3]));