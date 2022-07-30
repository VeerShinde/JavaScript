// ternary operator / conditional operator

// you want to assign value to drink, but on conditions.
// 1st try without using ternary

let age = 10;
let drink;                   // undefined datatype

if (age >= 5) {
    drink = "beer";
} else {
    drink = "milk";
};

console.log(drink)

console.log("****************************************")

// Using ternary

let ag = 10;
let drik = ag <= 10 ? "milk" : "beer";
//         conditiom   if true add this     if false add this
//         Remember syntax properly

console.log(drik)

let quantity = 24;
let amount = quantity >= 21 ? "adult" : "teen";
console.log(amount);

