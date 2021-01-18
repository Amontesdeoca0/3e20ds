// pilas palindromos

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
this.dataStore[this.top++] = element;
}
function peek() {
return this.dataStore[this.top-1];
}
function pop() {
return this.dataStore[--this.top];
}
function clear() {
this.top = 0;
}
function length() {
return this.top;
}

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
    return true;
    }
    else {
    return false;
}
}
var word = "hola";
if (isPalindrome(word)) {
console.log(word + " es un palindromo");
}
else {
console.log(word + " no es un palindromo");
}
word = "reconocer"
if (isPalindrome(word)) {
console.log(word + " es un palindromo");
}
else {
console.log(word + " no es un palindromo");
}