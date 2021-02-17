
// CHALLENGE 2

// Types Challenge

​

/* BRONZE

Create an Object that contains a string, number, boolean, and object.

Console.log the type of one of the values in the object.

*/

let myVariable= { name = 'Eric', age = 36, var on = true;
console.log(on); let off = false;
console.log(off); 
}

​

/* SILVER

Write a conditional that checks the type of one of the values stored in the object 

and console logs the data type. If the value is not a string, number, boolean, or object 
console log 'What are you?!'

*/




​//typeof -> tells you the type of something
//if it === string -> console.log('It is a STRING')
let myVariable = {
    firstValue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}

let valueToCheck = myVariable.firstValue;

if (typeof valueToCheck === "string") {
    console.log("It is a STRING");
} else if (typeof valueToCheck === "number") {
    console.log("It is a NUMBER");
} else if (typeof valueToCheck === "boolean") {
    console.log("It is a BOOL");
} else if (typeof valueToCheck === "object") {
    console.log("It is an OBJECT");
} else {
    console.log("Who ARE you??")
}


