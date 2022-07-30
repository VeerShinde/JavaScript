// for of loop in array

const fruits = ["Apple", "Orange", "Peru"];
const fruits2 = [];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// to push items to another list using for of loop
for (let fruit of fruits) {
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

for (let frui of fruits) {
    console.log(frui)
}