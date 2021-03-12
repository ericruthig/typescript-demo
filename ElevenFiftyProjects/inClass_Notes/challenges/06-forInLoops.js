/* 
* BRONZE
    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for (let fellow in fellowshipOfTheRing.members) {
    console.log(fellow);
}

/* 
* SILVER
    - Add a conditional to the for in loop that checks if the characters name does 
    not begin with a vowel. Then, using string interpolation, console.log either 
    '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for (let fellow in fellowshipOfTheRing.members) {
    if(fellow[0] == 'A' || fellow[0] == 'E' || fellow[0] == 'O' || fellow[0] == "I" || fellow[0] == 'U') {
        console.log(`${fellow}'s`, 'name does begin with a vowel.');
    } else {
        console.log(`${fellow}'s, 'name does not begin with a vowel.`);
    }
}

/* 
* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/
let consonantArray = [];

for (let fellow in fellowshipOfTheRing.members) {
    if(fellow[0] == 'A' || fellow[0] == 'E' || fellow[0] == 'O' || fellow[0] == "I" || fellow[0] == 'U') {
        console.log(`${fellow}'s`, 'name does begin with a vowel.');
    } else {
        console.log(`${fellow}'s, 'name does not begin with a vowel.`);
        consonantArray.push(fellow);
    }
}
console.log(consonantArray)


