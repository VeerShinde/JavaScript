// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// console.log(i)    // this will give error as not defined.
// if we declare variable in loop using "let" it is limited to loop only we can't use it outside the loop.
// to use it outside the loop declare variable using var.

// let number = 50;
// let total = 0;

for (let i = 1; i <= number; i++) {
    console.log(i);
}


// sum of n natural numbers

let number = 10;
let total = 0;
// we can declare i hear also so we can access it globally, but its not a good practice.
for (let i = 0; i <= number; i++) {
    total = total + i;
    // console.log(total);
}

console.log(total);



