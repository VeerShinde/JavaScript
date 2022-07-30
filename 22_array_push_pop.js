// push and pop in array

let fruits = ["Apple", "Peru", "Chiku", "orange"];
console.log(fruits);

// to add element(in the end)
// push:
fruits.push("Banana");
console.log(fruits);

// pop
// pop will remove the last element
fruits.pop();
console.log(fruits);

// we can pop item from array and store it somewhere else
let popeditem = fruits.pop();
console.log("popped fruit is", popeditem);

// shift and unshift:
// to add element at start
fruits.unshift("pineapple");
console.log(fruits);

// shift
// to remove 1st element
fruits.shift();
console.log(fruits);

// we can remove item from array and store it somewhere else
let removedfruit = fruits.shift();
console.log("removed fruit is", removedfruit);

// push and pop are fast as compare to shift and unshift


