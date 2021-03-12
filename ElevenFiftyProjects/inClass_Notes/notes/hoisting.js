/*
hoisting

what does hoisting mean? what does it do?
think of it like opening a book with multiple chapters. One of the first pages in the book
might be an index or a table contents with a list of the various chapters you might find. We 
can look at this page to get an idea of what info we can expect to find the book later.

Hoisting does this in a similar way. There are two phases that happen when we run our
code:
- creation phase: any variable (var, let, const) and function in our code are store in 
memory.
- execution phase: values are assigned to the variables and functions that are in 
memory during the create phase.

what's on the left of the = is stored to memroy during the create phase. what's on the
right is assigned during the execute phase.
    (create)  (execute)
let variable = 'value';

When Javascript runs it first reads top to bottom and store the variables, kind of like
putting the chapter names in the index. After that it reads top to bottom again in
sequential order to fill out the value of each chapter.
*/

let num = 12;
console.log(num);

var num = 27;


sayHi()

function sayHi() {
    console.log('hello');
    let hi = 'hola';
    console.log(hi);
}

//not defined varFunc()
varFunc();
let varFunc = function () {
    console.log('testing');
}

//define first
let varFunc = function () {
    console.log('testing');
}
varFunc();

//**const and let do not get values hoisted**
//if you put a function into a variable, it is a variable first
// var always creates a globally scoped variable
// let creates a locally scoped variable
