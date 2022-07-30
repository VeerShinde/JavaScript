// intro to hoisting
// we can call function before declaring it, only in normal function declaration, this will give error in function expression and arrow function.

birthday();

function birthday(){
    console.log("Wish you many more happy returns of the day");
};

// detail info on hoisting, later