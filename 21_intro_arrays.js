// Intro to arrays
// reference type

// Array is ordered collection of items(index value)
// how to declare array
let name = ["Veer", "Kunal", "Chirag", "Tanmay"];
//  index:     0       1         2         3
console.log(name);
console.log(name[1]);

// you can declare any type of data-type in array.
let age = [23, 23.5, "Veer", undefined, null,];

// how to change the item in array
name[3] = "Yash";
console.log(name);

// to check data type
console.log(typeof name);                 // object

// all type of data type in js is object, so how to find is that array, tuple, etc.
console.log(Array.isArray(name));    // this will ans in true or false



