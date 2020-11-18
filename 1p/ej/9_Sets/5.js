//explicar diferencia entre set y weakset con un ejemplo

let a1 = {x:1}
let a2 = {y:1}

let set = new Set();
let weakset = new WeakSet();

set.add(a1);
weakset.add(a2);

for(let item of set){
    console.log(item);
}

console.log(weakset);