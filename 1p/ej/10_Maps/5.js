//explicar diferencia entre map y weakmap con un ejemplo

let a1 = {x:1}
let a2 = {y:1}

let map = new Map();
let weakmap = new WeakMap();

map.set(a1,'a1');
weakmap.set(a2,'a2');

for(let [key, value] of map){
    console.log(key,value);
}

console.log(weakmap.get(a2));