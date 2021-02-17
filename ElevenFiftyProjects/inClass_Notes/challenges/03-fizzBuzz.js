/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB = 12;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}

//switch
FB = 30;

switch (true){
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case FB % 5 === 0:
        console.log('Buzz')
        break;
    case FB % 3 === 0:
        console.log('Fizz');
        break;    
}

switch(true) {
    case(FB % 3 === 0 && FB % 5 === 0) :
    console.log('Fizz Buzz');
    break;
    case (FB % 5 === 0) :
        console.log('Buzz');
        break;
    case (FB % 3 === 0) :
        console.log('Fizz');
        break;
}

//Ternary
(FB % 15 === 0)
    ? console.log('Fizz Buzz')
    : (FB % 5)
        ? console.log('Buzz')
        : (FB % 3 === 0)
            ? console.log('Fizz')
            : console.log(FB);

let FB = 15;
FB % 5 == 0 && FB % 3 == 0 ? console.log('Fizz Buzz') :
FB % 3 == 0 ? console.log('Fizz') :
FB % 5 == 0 ? console.log('Buzz') :
console.log(FB);
