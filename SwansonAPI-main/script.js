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

let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

// global elements
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//event listener
logo.addEventListener('click', fetchQuote); 

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
//     .then(json => console.log(json));
//     .then(displayQuote(json))
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
   let logoContainer = document.getElementById('genQuote');
//    console.log(logoContainer.firstElementChild);
    logoContainer.firstElementChild != null ?
    logoContainer.removeChild(logo) :
    null;

   let quoteBy = document.createElement('p');
   quoteBy.className = 'quoteBy';
   quoteBy.innerText = '~ Ron Swanson';
   quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;';

   let quote = document.createElement('h1');
   quote.className = 'quote';
   quote.innerText = `${data[0]}`
   quote.style = 'font-family: pinewood; color: #3a2718;';

   let img = document.createElement('img');
   img.src = './assets/ron.png';
   img.alt = 'Ron Swanson';
   img.style = 'height: 100px; width: auto;';

   //appending

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(img);

    img.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);
    fetchQuote();
    })
}

