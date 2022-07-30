// break keyword 
// continue keyword

// break keyword break the loop.
// the code is written to print 1 to 10 numbers but due to 'break' loop stops on 6.

for (i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
};

console.log("Done");

// continue keyword
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// the code is written to print 1 to 10 numbers but due to 'continue' loop saw the continue on 6 and ignore the six and start the loop again.
// 6 will not print.

for (i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
};




