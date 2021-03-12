// create a function that takes in 2 numbers, and console logs whether the first 
// number is a multiple of the second number

function numberTest(x, y) {
    if(x % y == 0){
        console.log(true);
    } else {
        console.log(false);
    }
};

numberTest(5,10);

//
let city = '';

function returnCity() {
    let functionCity = 'Indianapolis'
    return functionCity;
}
city = returnCity();
console.log(city); 

//
function calculator(num1, num2)  {
    return num1 + num2;
}
calculator(2,5);
