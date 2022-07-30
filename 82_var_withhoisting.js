// What is hoisting
// find notes
// Before executing code we are storing function in memory.
// This is the example:

birthday();           // ia m calling a function before executing, still it will work.
console.log(birthday)   // this will print the whole function not only what we want to console.

function birthday() {
    console.log("Wish you many more happy returns of the day");
};


// if we try to make function expresion and call it, this will not work.
myfunc();                        // this will give error, this error:- Uncaught TypeError: myfunc is not a function at 82_howhoistingwork.js:14:1

var myfunc = function () {
    console.log("I am function expression");
}
// this will not run because we are storing function in variable and variable cannot be call before declaring.



