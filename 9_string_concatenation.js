// string concatenation

let name = "Veer";
let lastname = "Shinde";

let fullname = name + " " + lastname;
console.log(fullname)        // this will merge name and lastname with space-between

// if you want when we merge this string it should convert it into number.
let age = "22";
let no = "32";

let newnumber = +age + +no;    // adding + before string will convert it into number.
console.log(typeof newnumber);

console.log("**************************");

// Template string
// if i want:-
// "My name is veer shinde and my age is 22"

// This is 1 way
let finalname = "Veer Shinde";
let ag = 22;

let me = "My name is " + finalname + "and my age is " + ag;

console.log(me);

// This is 2nd way using template string

let aboutme = `My name is ${finalname} and my age is ${ag}`;
console.log(aboutme);






