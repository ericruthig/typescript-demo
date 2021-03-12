//asynchronous programming

// Application Program Interface
// not a database or server
//allows to access points on a server
// comes in the forms of Endpoints
/*.
rest api: REpresentational State Transfer
creates a 

read (GET)
update (PUT)
delete (DELETE)

*/

let baseURL = 'https://ron-swanson-quotes.herokuapp.com/vs/quotes';

// global events
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//event listener
logo.addEventListener('click', fetchQuote()); 


/* Fetch

let promise = fetch(url, [option]);
url: the URL we wish to visit
options: optional paramets like methods, headers, etc.

Promise:
an unknown value when created
represents the eventual fulfilled value or rejetion (error)
is always:
pending: intial state, neither fulfilled nor rejected
fulfilled: the operation cokmpleted successfully
rejected: operation failed
*/

// fetch(baseURL)
//     .then(res => res.json())
//     .then(json => console.log(json));

// function  fetchQuote() {
//     fetch(baseURL)
//     .then(res => res.json())
//   .then(json => console.log(json));
// }

// fetchQuote();

/*
async/await
allows us to program in a syncrhonous manner while still allowing code to run in the background
makes our sites as responsive as possible

async keyboard can be used on a normal function
async used at the beginning of the function declaration
can use await keyword
ex:

async function myFn() {
    await...
}
*/

async function fetchQuote() {
    const response = await fetch(baseURL);
    const json = await response.json();
    // console.log('async/await', json);
    displayQuote(json);
};

let displayQuote = data => {
    console.log('display quote', data);
    /*
    set elements
    apply properties
    put them somewhere
    */
   //set element
   let quoteBy = document.createElement('p');
   quoteBy.className = 'quoteBy';
   quoteBy.innerText = '~ Ron Swanson';
   quoteBy.style = 'font-sixe: 3rem; font-family: billionDreams; color: #3a2718;';

   let qupte = document.createElement('h1');
   quote.className = 'quote';
   quote.innerText = `(${data})`
}