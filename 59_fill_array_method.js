// fill method
// to fill elements at array
// value, start, end

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.fill(9, 2, 6);                   // add 9 value from index 2 to 5(6 will be excluded).
console.log(numbers);

const myarray = new Array(7).fill(1);          // fill 7 elements with value 1.
console.log(myarray);

