// object _destructuring
const person = {
    name: "veer",
    age: 22,
    gender: "male",
    address: "Panvel"
}

let { name, age, ...rest } = person;
console.log(name);
console.log(rest);

