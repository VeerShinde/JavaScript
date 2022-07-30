// Very imp topic for interview
// primitive vs reference data types

// primitive
let num1 = 8;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++
console.log(num1);
console.log(num2);
// in primitive data type, variable get different address in stack to store, so when we increment 1 variable value it doesn't affect on another.

// reference 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("Item3");
console.log(array1);
console.log(array2);
// in reference it get same address in stack, so when we add another item in array1 it automatically affect the array2 because they are sharing same address.


