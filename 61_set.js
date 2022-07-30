// set (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ["Veer", "mom"]
const numbers = new Set([1, 2, 3, 4, "veer"])
console.log(numbers[0]);           // this will give undefined because sets has no index value
numbers.add(6);          // add one element at a time
numbers.add(7);
numbers.add(items);
console.log(numbers.has("veer"));             // this will tell you is veer element present in numbers or not.
console.log(numbers)

for (let i of numbers) {
    console.log(i)
}

// we cam use sets when we have unique values.

console.log(numbers.size);            // to find the length of the set, length method doesn't work on sets.

// we can also find length by this way.
let length = 0;
for (let size of numbers) {
    length++;
}

console.log(length);