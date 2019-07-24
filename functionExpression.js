/* Normal Function Statement */

function sayHi(){
    console.log('hi');
};

sayHi();

/* Call Function */

function callFunction(fun){
    fun();
};

/* Function Expression */

var sayBye = function(){
    console.log('bye');
};

// sayBye();

callFunction(sayBye);//this use for the Call Function above

module.exports = sayBye;