//arrow functions

/*      aka Fat Arrow Functions
        not declarations
        do not get hoisted

        two types:
            - concise body: return is automatic
            - block body: return is not automatic

*/
// concise body 
let speak = (name) => console.log(`the ${name} goes woof.`);
speak('dog');

//with Return
let firstName = 'Jerome';
let lastName = 'Flaherty';

let concatName = (first, last) => `${first} ${last}`;
console.log(concatName(firstName, lastName));

// block body 1 parameter
//let speakAgain = name => 

// block body 2 parameters
//let speakAgain = (name, 2); =>

// block body 0 parameters
//let speakAgain = () => 


let speakAgain = name => {
    console.log(`the ${name}`);
    console.log('goes woof');
}
// speakAgain('dog');

 console.log(speakAgain('Frederick'));

 // must specify the return

 let concat = (first, last) => {
      console.log('test')
    return  `${first} ${last}`;
 }
 let fullName = concat('Jerome', 'Flaherty');
 console.log(fullName);

 //ex 2

 let x = 9;
 let y = 10;

 let total = (num1, num2) => {
     sum = num1 + num2;
     return sum;
 };

 console.log(total(x,y));