// array destructuring

const myarray = ["Veer", "Kunal", "Vidya", "Shinde"];
// let myarray1 = myarray[0];
// let myarray2 = myarray[1];
// console.log(myarray1);
// console.log(myarray2);


// this is the shorthand way to do the above program
let [myarray1, , myarray2, ...mynwarray] = myarray;   // one extra comma to skip 1 index value, you can remove if you want, and everything else will be added in mynwarray.

console.log(myarray1);       // "Veer"
console.log(myarray2);       // "Vidya"
console.log(mynwarray);      // "Shinde"

let [array1, array2, ...array3] = myarray;
console.log(array3)          // "Vidya, Shinde"