//arrays
//we use arrays to store multiple values within an array

let array = ['value1', 'value2', 'value3'];

//this is how we target specific values in an array
console.log(array[0]);

//if we don't know length of array, use .length
console.log(array.length);

//create array objects by using the Array() constructor
let test = new Array();
console.log(test);

let test2 = new Array(3);
console.log(test2);
console.log(test2.length);

let array = ['value1', 'value2', 'value3'];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach((value) => console.log(value));

let array = ['value1', 'value2', 'value3'];
array.forEach((value) => {
    console.log(value)
})


let array = ['value1', 'value2', 'value3'];
array.forEach(function(value){
    console.log(value)
})

// .length method returns the length of given array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.length);

// array.push adds another element to an array at the end
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
shoppingList.push('salt');
console.log(shoppingList);

// .pop method removes last element from an array and then returns the array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

//Array.unshift adds a new element at the beginning of the array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

//oppoisite is array.shift - removes element at the beginning of an array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

//Array.map transforms the elemnts in the original array by calling the given function
//once for eah element in the array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.map((value) => value.toUpperCase()));

//Array.filter creates a new array with only the elements that pass the test in a given
//function
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.filter(value => value.startsWith('l')));

//array.find returns the first element in the array that passes a test given as a function
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.find(value => value.startsWith('l')));

//Array.reduce executes a given function for each value of the array and returns a single value
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

let costs = [1, 1, 1, 1, 1, ];
console.log(costs.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 10));

//Array.includes determines whther an array has a specific element
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.includes('lime'));
console.log(shoppingList.includes('limes'));

//array.indexOf searches array for a specific element and returns the first index
// it will return -1 if not found
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf(('lemon')));

// .findIndex returns the index  of the 1st element of an rray that passes test of 
//a function
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(value => value.startsWith('g')));

// .every method checks if all elements in an array pass a test given as a function.
//if there is one element that returns as false, the function returns false and stops
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.every(value => value.length > 1));
console.log(shoppingList.every(value => value.startsWith('c')));

//Array.concat merges two or more arrays and returns a new array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
let anotherList = ['salt', 'mint', 'olive'];
console.log(shoppingList.concat(anotherList));

//Array.slice will select a part of an array and return a new array we can select the 
//elements by providing a start and end argument which will be indicated by the index
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 3));

//Array.splice add or remove elements in an array then return those elements
//first argument takes in an integer that specifies at what index to add/remove elements.
//Second argument takes in the number of items to be removed
//optional third argument takes in new element to be added to the array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
// shoppingList.splice(2, 2);
//        (item position, then number of items to remove)
// console.log(shoppingList);

shoppingList.splice(2, 1, 'cherry')
console.log(shoppingList);

//Array.sort will sort items in an array. The sort order can be alphabetic or numeric
// either ascending or descending. By default, sort() orders the values as strings in 
//alphabetical and ascending order. It can take in a compare function which indicates if 
//you want it to be ascending or descending
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let nums = [25, -9, 15, 1000];
//descending order
console.log(nums.sort((a, b) => b - a));
//ascending order
console.log(nums.sort((a, b) => a - b));

//array.reverse wil reverse the order of the element in an array
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

// .toString will convert an array into a string
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

// .join converts the element of an array into a string. Can accept optional parameter,
//"separator", which indicates how the element will be separated. The default separator
//is a comma
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.join('! and '));

// spread operator (indicated by '...'): expands the contents of the array and takes it
//out of the array structure
let shoppingList = ['celery', 'lime', 'lemon', 'grenadine', 'oranges'];
console.log(...shoppingList);
