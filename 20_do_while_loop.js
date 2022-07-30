// do-while-loop

// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.

// The do...while is used when you want to run a code block at least one time.

// Execute a code block once, an then continue if condition (i < 5) is true:

// Syntax:
// do {
//   code block to be executed
// }
// while (condition);

let i = 10;
do {
    console.log(i);
    i++;
} while (i <= 9);    // even if the condition is false do part will execute, you can give the true condition and the while loop will run.

console.log("The value of i is", i);