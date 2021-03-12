/*scope is the heirarchy of variables in our code we call them:
- global scope of parent scope
- local scope of child scope
*/

let global = 'Earth';

function scopeExample() {
    let local = 'Indianapolis';
    let inner = 'it has many places to visit';
    console.log(local);
    console.log(`${local} is a humble city on ${global}.`);
    if(true) {
        let inner = 'what a large city';
        console.log(inner);
    }
    console.log(inner);
}

scopeExample();

// scope.Example();
// console.log(local);
