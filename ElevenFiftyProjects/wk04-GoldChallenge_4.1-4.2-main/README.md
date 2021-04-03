You will need to **FORK** this repository (repo) to your own account.  After you have forked it to your account, you will then need to **CLONE** that repo to your computer.  By doing this, you will be able to work through the challenges and push your code back to your own repo.  All instructions are within each file.  Below details the instructions for both challenges.

*************************************************************************************

**4.1 Classes Challenge**

Create a class named Polygon that contains the following information:

    - A constructor method with a parameter to capture information (hint: this should be capturing an array of numbers).
        - assign the parameter to a key using 'this'
    - Has a method named perimeter, that should do the following:
        - return ONLY the parameter, or an empty array from the method
        - call the reduce method on your return value to get a single output value
    

    - Create a new object/instance of the class Polygon that is stored in a variable.
        - The new Polygon should accept an argument that is an array of 4 numbers
    
    - console.log the return value from the newly created Polygon.

*************************************************************************************

**4.2 Input & DOM Manipulation Challenge**

- With the given shoppingList array (within the JS file), use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.