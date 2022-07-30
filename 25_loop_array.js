//loop in array

let fruits = ["Mango", "Orange", "Apple", "Peru"];
let newfruits = [];

// i want to increase i value length till his not less than fruits length.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


for (let i = 0; i < fruits.length; i++) {
    newfruits.push(fruits[i].toUpperCase());
}
console.log(newfruits);

let year = [2000, 2001, 2002, 2003];
for (let i = 0; i < year.length; i++) {
    console.log(year[i]);
}

for (let j = 0; j < fruits.length; j++) {
    console.log(fruits[j]);
}

for (let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].toUpperCase());
}
