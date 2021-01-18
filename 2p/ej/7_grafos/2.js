//order
class orden{

  constructor(){
      this.elements = [];
      this.size = 0
  }

add(x){
    this.elements[this.size] = x;
    this.size++

}

orden (array){
    for(let x = 0; x < array.length; x++)
    for(let y = 0; y< array.length ; y++){
       if(array[y]>array[y+1]){
        let s = array[y]        
        array[y] = array[y + 1];   
        array[y + 1] = s        
        }
      }
  }
  
  primary(array){
    for(let i = 0; i < this.size; i++){
      array[i] = this.elements[i];
    }
  }
}

let o = new orden();
let arr = []

for(i = 0; i < 10; i++) o.add(Math.round(Math.random()*10));

o.primary(arr);

console.log(o)
console.log(arr.toString());

o.orden(arr);
console.log(arr.toString())