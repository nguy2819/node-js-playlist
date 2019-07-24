var counter = function(arr){
    return 'There are ' + arr.length + ' elemtns in this array';
};

console.log(counter(['shaun', 'crystal', 'ryu']));
// There are 3 elemtns in this array

require('./functionExpression');
/* but you need to set module.exports inside the functionExpression file 
so the functionExpresion file can be run in the module.js file */

// either set var sayBye = require(./functionExpression) => the results are still hi and bye