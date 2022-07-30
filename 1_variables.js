"use strict" // this keyword help to find bugs in code always include it. 

// Basics of variable
// Convention(Rules)
// Always use camelCase writing to declare a variable for ex- firstName,and smalletters are most preffered for declaring variable.
// Declare a variable

var firstname = "Veer";

// use a variable

console.log(firstname);

// var is used to define a new variable if i use a var and make another variable with same name it will make a new variable and give a different value, it will not change the previous variable value.
// to change a variable value, no need to use var keyword again.

firstname = "Kunal";

console.log(firstname);

// javascript is case sensitive language

var FirstName = "veer";

console.log(FirstName);

// Rules for declaring variable
// you canoot start with number, but you can use number in between.
// For eg. 1value (invalid)
// value1 (valid) 

var value1 = 10;
console.log(value1);

// you can use underscore(_) and dollar($) in variable, no other special characters are allowed.

var last_name = "shinde";
var _lastName = "Singh";
var First$name = "Kunal";
var $Firstname = "tanmay";
//  all of the above examples are valid for declaring variables.

// you cannot use space in between while declaring variable
// first name = "Veer";    (invalid)



