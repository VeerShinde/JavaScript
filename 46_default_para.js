// default parameter

function addtwonum(a, b) {
    return a + b;
}

console.log(addtwonum(5, 5));
// above is the normal way to use function

function sum2numbers(c, d = 5) {
    console.log(c + d);
}
// now if user don't pass any value to d, then it will automatically take 5 as second argument.

sum2numbers(8);     // 13, taken d as 5.

sum2numbers(8, 3);   // 11, because value is passed to d.

