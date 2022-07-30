// clone array

// one way
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
console.log(array1);
console.log(array2);
array1.push("Item3");
array2.push("Item4");
console.log(array1);

// 2nd way
let array3 = array1.slice(0);        // start index 0 and go till end
console.log(array3);

// concatenate two arrays
// 3rd way
let array4 = [].concat(array2);
console.log(array4);

// new way
// 4th way
// spread operator
let array5 = [...array4];   // we can also add more element in array5, ex: [...array4, "item5", item6, ...array1];
console.log(array5);

// now we want to copy all element in array1 to array2 and also add some more element to it.
array2 = array1.slice(0).concat(["item5", "item6"]);
console.log(array2);