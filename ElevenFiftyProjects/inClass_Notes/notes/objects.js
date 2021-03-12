//objects
//example

let myself = {
//    key       value
    firstName: 'Jerome',
    lastName: 'Flaherty',
    hairColor: 'pink',
    age: 22,
    cool: true,
    interests: ['game', 'fencing'],
    dislikes: ['spelling'],
    friend: {
        firstName: 'Eric',
        lastName: 'Winebrenner'
    },
    fullName: function() {
        return this.firstName + this.lastName;
    }
}
//property is a value on an object
//
console.log(myself.interests);
console.log(myself.hairColor);
console.log(myself.friend);
console.log(myself.interests[1]);
console.log(myself.fullName());

/* JSON javascript object notation
- derived from javascript syntax, json is text only
- exists as a string
   - useful when fetching datate from a server
   - need to be converted to a native Javascript object if we want to acces the info

   JSON Data ex:
   https://rickandmortyapi.com/api/character

   paste raw date to: https://jsonformatter.org

*/

/* objects are containers of perpoerties. Properties are an association
between a key-value pair. A property's value that is a function is then
referred to as a function.

! OBJECT BRACKET NOTATION/PROPERTY ASSOCIATIONS 

We can access the propertise within our object using accessors like
dor notation and bracket notation.

property accessors:
- dot notation
- bracket notation

*/

let user = {};
console.log(user);

user['name'] = 'Amit';
user['age'] = 29;
/* user.coolMusic = true; can set/add properties to objects by both 
square brackets and squate notation
*/
console.log(user);

// we can also target specific keys we created
console.log(user['name']);

/*all keys and objects are strings, even if they are not wrapped in
quotes when represented in the object itself.
We cam see this by using the .keys() mthog for our object
this will retun back an array of the keys that exists in our object
*/

let keys = Object.keys(user);
console.log(keys);
console.log(typeof keys[0]);

/*square brackets are good to use when we can't use dot notation
to dig thru an object. It's not common, but something we are capable 
of doing.
A big reason to use square bracket notation is when spaces are in 
the key name of a property
*/

let spacedObj = {
    noSpaces: true,
    'Spaces Here': true
}
console.log(spacedObj["Spaces Here"])
//need the brackets to access because of the space