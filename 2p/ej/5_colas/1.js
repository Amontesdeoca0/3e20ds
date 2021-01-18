// colas dance

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
this.dataStore.push(element);
}
function dequeue() {
return this.dataStore.shift();
}
function front() {
return this.dataStore[0];
}
function back() {
return this.dataStore[this.dataStore.length-1];
}
function toString() {
var retStr = "";
for (var i = 0; i < this.dataStore.length; ++i) {
retStr += this.dataStore[i] + "\n";
}
return retStr;
}
function empty() {
if (this.dataStore.length == 0) {
return true;
}
else {
return false;
}
}

function Dancer(name, sex) {
this.name = name;
this.sex = sex;
}
function getDancers(males, females) {
/*lee el documeto aqui*/var names = ("dancers.txt").split("\n");
for (var i = 0; i < names.length; ++i) {
names[i] = names[i].trim();
}
for (var i = 0; i < names.length; ++i) {
var dancer = names[i].split(" ");
var sex = dancer[0];
var name = dancer[1];
if (sex == "F") {
femaleDancers.enqueue(new Dancer(name, sex));
}
else {
maleDancers.enqueue(new Dancer(name, sex));
}
}
}
function dance(males, females) {
console.log("Los compañeros de baile son: \n");
while (!females.empty() && !males.empty()) {
person = females.dequeue();
console.log("La bailarina es: " + person.name);
person = males.dequeue();
console.log(" y el bailarin es: " + person.name);
}
console.log();
}
// test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
console.log(femaleDancers.front().name + " esta esperando para bailar");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " esta esperando para bailar");
}