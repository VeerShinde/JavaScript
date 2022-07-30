const fruits = ["Apple", "Orange", "Peru"];
const fruits2 = []
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

while (i < fruits.length) {
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);

let k = 0;
while (k < fruits.length) {
    console.log(fruits[k]);
    k++;
};