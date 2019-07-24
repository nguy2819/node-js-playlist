//this file is linked with the modulePatterns.js
var all = require('./modulePatterns');

console.log(all.counter(['david','tien']));
// The answer will be: There are 2 elements in this array

console.log(all.adder(2,3));
//The answer will be: The sum of the 2 numbers is 5

console.log(all.adder(all.pi,5));
//The answer will be: The sum of the 2 numbers is 8.142
