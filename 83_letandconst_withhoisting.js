// hoisting using let and const keyword
// let and const are hoisted.

mom();         //when we use let to make function this will also give error but different error, Uncaught ReferenceError: Cannot access 'mom' before initialization.
// this means variable made using let keyword is store in memory but we cannot use it without intializing.
// This term is called Temporal dead zone(tdz), they are stored in tdz.

let mom = function () {
    console.log("My mom name is Vidya");
}

mom() // now i initialized and called it, so it will work. 

console.log(name)      // error
console.log(lname)     // error
console.log(mname)     // undefined
let name = "Veer";
const lname = "Shinde";
var mname = "khandu";

