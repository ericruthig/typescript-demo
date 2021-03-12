//*!parameters

//parameters are values we haven't assigned yet
//they are passed thru our functions as arguments
/*   ex:

function nameFunc(parameter) {
    return ...
}
nameFunc(arugment);

naming convention should reflect desired data

*/

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

coffeePot('dark roast'); // 'dark roast' is the argument being passed
coffeePot('medium');

let kettle = coffeePot; // function reference
kettle(); //undefined
kettle('green tea');

//! Multiple Parameters and Arguments

function dinner(main, side, drink) {
    console.log(`For dinner i had ${main} and ${side}. Also ${drink}.`)
};
dinner('steak', 'potatoes', 'coke');
dinner('potatoes', 'coke', 'steak');

//order is literal - arguments fall in line with parameters regarding their position

//! RETURN
// function can manipulate our data and return a new value.

function calc(one, two, three) {
    let total = one + two + three;
    let average = Math.round(total / 3); //Math.round() rounds the value to the nearest integer
    return average;
}

let avgWeight = calc(15,60,55);
console.log(`The three dogs' average weight is ${avgWeight} lbs.`);