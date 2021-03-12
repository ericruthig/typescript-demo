//!Functions

//function declaration
function declaration() {
    console.log('I am a function declaration');
}

declaration();
//are hoisted
// runs when we call them (invoked)

//! Function Expression
let expression = function () {
    console.log('I\'m a function expression');
}

expression();

//not hoisted
//invoked using the variable name