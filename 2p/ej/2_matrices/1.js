//sacacolumna(n)

// a two-dimensional array
var two_d = [[1,2,3],[4,5,6],[7,8,9]];

// take the first column
var col1 = two_d.map(function(value,index) { return value[0]; });
console.log(col1);